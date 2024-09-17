"use client";
import React, { useState } from "react";
import styles from "./style.module.scss";
import { Box, Step, StepLabel, Stepper } from "@mui/material";
import FirstForm from "./firstForm";
import SecondForm from "./secondForm";
import ThirdForm from "./thirdForm";
import { FormProvider, SubmitHandler, useForm } from "react-hook-form";
import MyStepper from "./steppr";
import { companyId, mainUrl } from "@/app/lib";
import { toast } from "react-toastify";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import axios from "axios";
const steps = [
  {
    id: 0,
    main: "Company Information",
    sub: "Please provide your name and email",
  },
  {
    id: 1,
    main: "License Information ",
    sub: "A few details about your License",
  },
];
const SUPPORTED_FORMATS = [
  "image/png",
  "image/jpeg",
  "image/jpg",
  "image/webP ",
  "video/webm",
  "video/mp4",
  "image/svg",
  "video/x-ms-wmv",
  "video/wmv",
  "image/svg+xml",
];

const validationSchema: any = [
  //validation for step1
  yup.object({
    company_name: yup.string().required("company name is required"),
    company_phone: yup.string().required("company phone is required"),
    company_email: yup
      .string()
      .required("company email is required")
      .email("Enter a valid email"),
    company_website: yup.string().required("company website is required"),
    company_logo: yup
      .mixed()
      .required("A file is required")
      .test("fileType", "Unsupported file format", (value: any) => {
        if (!value) return true; // If no file is provided, don't perform validation
        return SUPPORTED_FORMATS.includes(value.type);
      }),
  }),
  //validation for step2
  yup.object({
    information: yup
      .array()
      .of(
        yup.object().shape({
          builder_id: yup.string().required("Price is required"),
          state_id: yup.string().required("State  is required"),
          license_holder_name: yup
            .string()
            .required("license_holder_name is required"),
          license_holder_phone: yup
            .string()
            .required("license_holder_phone is required"),
          address: yup.string().required("address is required"),
          license_type: yup.string().required("license_type is required"),
          insurance_path: yup.mixed().required("A file is required"),
          liability_path: yup.mixed().required("A file is required"),
        })
      )
      .min(1, "at least one License"),
  }),

  //validation for step3
  yup.object({
    installation_type: yup.string().required("installation type is required"),
    roof_types: yup.string().when("installation_type", {
      is: "roof_mount",
      then: (schema) => schema.required("roof_types is required"),
    }),
    roof_pitch: yup.string().when("installation_type", {
      is: "roof_mount",
      then: (schema) => schema.required("roof_pitch is required"),
    }),
    bird_protectors: yup.string().when("installation_type", {
      is: "roof_mount",
      then: (schema) => schema.required("bird_protectors is required"),
    }),
    solar_lip: yup.string().when("installation_type", {
      is: "roof_mount",
      then: (schema) => schema.required("solar_lip is required"),
    }),
    trench_ft: yup.string().when("installation_type", {
      is: "ground_mount",
      then: (schema) => schema.required("trench_ft is required"),
    }),
    number_of_panels: yup.string().required("number of panels is required"),

    panel_wattage: yup.string().required("panel wattage is required"),

    system_size: yup.string().required("system size is required"),

    main_service_upgrade: yup
      .string()
      .required("main service upgrade is required"),

    check: yup.string().required("check is required"),
    notes: yup.string().required("notes is required"),
    new_mpu: yup.string().required("new_mpu is required"),
    current_mpu: yup.string().required("current_mpu is required"),
    is_battery: yup.string().required("is_battery is required"),
    number_of_battaries: yup
      .string()
      .required("number_of_battaries is required"),
    is_ev_charger: yup.string().required("is_ev_charger is required"),
    number_of_ev_charger: yup
      .string()
      .required("number_of_ev_charger is required"),
    number_of_ft_from_service_panel: yup
      .string()
      .required("number_of_ft_from_service_panel is required"),
  }),
];
const FormContainer = () => {
  const [activeStep, setActiveStep] = React.useState(0);
  const [isLoading, setLoading] = useState(false);
  const [loadingOne, setLoadingOne] = useState(false);

  let continueForm = false;
  const currentValidationSchema = validationSchema[activeStep];
  let registeredCompany: any = {};

  if (typeof window !== "undefined") {
    const storedCompany = sessionStorage?.getItem("registerCompany");
    if (storedCompany) {
      try {
        registeredCompany = JSON.parse(storedCompany);
      } catch (error) {
        console.error("Error parsing stored company data:", error);
        registeredCompany = null;
      }
    }
  }
  console.log("registeredCompany", registeredCompany);

  let companyObj = registeredCompany;
  const methods: any = useForm<any>({
    resolver: yupResolver(currentValidationSchema),
    shouldUnregister: false,
    mode: "onChange",
    defaultValues: {
      information: [
        {
          state_id: "",
          license_holder_name: "",
          license_holder_phone: "",
          license_type: "",
          address: "",
          builder_id: companyObj?.id,
          license_path: "",
          insurance_path: "",
          liability_path: "",
        },
      ],
    },
  });

  const { handleSubmit, reset, trigger } = methods;

  const handleNext = async () => {
    const isStepValid = await trigger();
    if (companyObj)
      if (isStepValid) setActiveStep((prevActiveStep) => prevActiveStep + 1);
    if (!companyObj)
      if (activeStep === 0) {
        const formData = new FormData();
        let SendDate: any = {
          company_name: methods.watch("company_name"),
          company_phone: methods.watch("company_phone"),
          company_email: methods.watch("company_email"),
          company_website: methods.watch("company_website"),
          company_logo: methods.watch("company_logo"),
        };
        for (const property in SendDate) {
          formData.append(property, SendDate[property]);
        }
        setLoadingOne(true);
        if (isStepValid) {
          axios({
            method: "post",
            url: `${mainUrl}/builders`,
            data: formData,
            headers: { "Content-Type": "multipart/form-data" },
          })
            .then(function (response: any) {
              setLoadingOne(false);
              console.log("response", response);
              toast.success("Company registered");
              setLoading(false);
              if (typeof window !== "undefined") {
                sessionStorage.setItem(
                  "registerCompany",
                  JSON.stringify(response?.data?.data)
                );
              }

              continueForm = true;
            })
            .catch(function (response) {
              setLoadingOne(false);
              console.log(response);
              toast.error("Error");
              setLoading(false);
            });
        }
      }
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  const onSubmit: SubmitHandler<any> = async (data) => {
    console.log("data", data);
    const formData = new FormData();
    data?.information?.map((e: any, i: any) => {
      for (const property in e) {
        formData.append(`information[${i}][${property}]`, e[property]);
      }
    });
    console.log("data?.information", data?.information);
    setLoading(true);

    axios({
      method: "post",
      url: `${mainUrl}/information`,
      data: formData,
      headers: { "Content-Type": "multipart/form-data" },
    })
      .then(function (response: any) {
        setLoadingOne(false);
        console.log("response", response);
        toast.success("Added Company information");
        setLoading(false);
        setActiveStep(0);
        methods.reset();
        continueForm = true;
      })
      .catch(function (response) {
        setLoadingOne(false);
        console.log(response);
        toast.error("Error");
        setLoading(false);
      });
  };
  const currentForm = () => {
    switch (activeStep) {
      case 0:
        return <FirstForm methods={methods} companyObj={companyObj} />;
        break;
      case 1:
        return <SecondForm methods={methods} companyObj={companyObj} />;
        break;
    }
  };

  return (
    <div className={styles.container}>
      {/* <div className={styles.first}>
        <h1>Become Byldeer</h1>
      </div> */}
      <Box sx={{ width: "100%" }}>
        <MyStepper steps={steps} activeStep={activeStep} />
        <FormProvider {...methods}>
          <form onSubmit={methods.handleSubmit(onSubmit)}>
            <>
              {currentForm()}
              <div className={styles.btns}>
                <button onClick={handleBack} disabled={activeStep === 0}>
                  Back
                </button>
                {activeStep === 1 ? (
                  <>
                    <button type="submit">
                      {isLoading ? "Submiting" : "Submit"}
                    </button>
                  </>
                ) : (
                  <>
                    <button
                      onClick={handleNext}
                      // disabled={!continueForm}
                      type={"button"}
                    >
                      {loadingOne ? "Please wait" : "Next"}
                    </button>
                  </>
                )}
              </div>
            </>
          </form>
        </FormProvider>
      </Box>
    </div>
  );
};

export default FormContainer;
