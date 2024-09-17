import { Button, Grid, TextField } from "@mui/material";
import React, { useEffect, useState } from "react";
import styles from "../firstForm/style.module.scss";
import StanderInput from "@/conponents/inputs/standerInput";
import CheckBox from "@/conponents/inputs/checkBox";
import RadioButton from "@/conponents/inputs/radio";
import ImageUploader from "@/conponents/inputs/imageUploader";
import { Controller, useFieldArray } from "react-hook-form";
import axios from "axios";
import SelectInput from "@/conponents/inputs/SelectInput/SelectInput";

const data = [{}];
const radioList = [
  { id: 1, title: "Yes" },
  { id: 0, title: "No" },
];

const SecondForm = ({ methods, companyObj }: any) => {
  console.log(
    "methods?.formState?.errors?.design_path",
    methods?.formState?.errors?.information?.message
  );
  const [id, setId] = useState(companyObj?.id);
  const { control } = methods;
  const { fields, append, prepend, remove, swap, move, insert } = useFieldArray(
    {
      control,
      name: "information",
    }
  );
  const [states, setStates] = useState<any>([]);

  useEffect(() => {
    axios
      .get("https://crm.boxbyld.tech/api/v1/countries/country/231")
      .then(function (response) {
        // handle success
        setStates(response.data.data);
        console.log(response);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .finally(function () {
        // always executed
      });
  }, []);
  const updateAllBuilderIds = () => {
    fields.forEach((field, index) => {
      methods?.setValue(`information.[${index}].builder_id`, companyObj?.id);
    });
  };
  useEffect(() => {
    if (id) {
      updateAllBuilderIds();
    }
  }, [id, fields]);

  const dropDownLicenseType = [
    { id: "roofer", name: "Roofer" },
    { id: "electrician", name: "Electrician" },
  ];
  console.log("Errrrrrrr", methods?.formState?.errors);
  return (
    <div>
      {companyObj?.id && (
        <>
          {" "}
          <Grid container columns={12} spacing={3}>
            <Grid item xs={12}>
              <div className={styles.companyInfoContainer}>
                <h2 className={styles.title}>License Information </h2>
                <hr className={styles.line} />
              </div>
            </Grid>
            <Grid item xs={12}>
              <Button
                style={{ border: "1px solid black" }}
                type="button"
                onClick={() =>
                  append({
                    builder_id: "",
                    state_id: "",
                    license_holder_name: "",
                    license_holder_phone: "",
                    license_type: "",
                  })
                }
              >
                add License +
              </Button>
            </Grid>
            <Grid item xs-={12}>
              {fields.map((field, index) => (
                <div key={field?.id} style={{ width: "100%" }}>
                  <Grid item xs={12}>
                    <SelectInput
                      key={field.id}
                      name={`information.[${index}][state_id]`}
                      placeholder="State"
                      label="State"
                      defaultValue=""
                      data={states?.states}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <StanderInput
                      key={field.id}
                      name={`information.[${index}][address]`}
                      placeholder="Address"
                      Label="Address"
                      type="string"
                      defaultValue=""
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <StanderInput
                      key={field.id}
                      name={`information.[${index}][license_holder_name]`}
                      placeholder="License holder name"
                      Label="License holder name"
                      type="string"
                      defaultValue=""
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <div style={{ display: "none" }}>
                      <StanderInput
                        key={field.id}
                        name={`information.[${index}][builder_id]`}
                        placeholder="Builder_id"
                        Label="builder_id"
                        type="string"
                        defaultValue={id}
                        value={id}
                        disabled
                      />
                    </div>
                  </Grid>
                  <Grid item xs={12}>
                    <StanderInput
                      key={field.id}
                      name={`information.[${index}][license_holder_phone]`}
                      placeholder="license holder phone"
                      Label="license holder phone"
                      type="string"
                      defaultValue=""
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <SelectInput
                      key={field.id}
                      name={`information.[${index}][license_type]`}
                      placeholder="License type"
                      label="License type"
                      defaultValue=""
                      data={dropDownLicenseType}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <label htmlFor="license_path">license path</label>
                    <Controller
                      control={methods.control}
                      name={`information.[${index}][license_path]`}
                      render={({ field: { value, onChange, ...field } }) => {
                        return (
                          <TextField
                            {...field}
                            value={value?.fileName}
                            onChange={(event: any) => {
                              onChange(event.target.files[0]);
                            }}
                            type="file"
                            id="picture"
                          />
                        );
                      }}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <label htmlFor="insurance_path">insurance path</label>
                    <Controller
                      control={methods.control}
                      name={`information.[${index}][insurance_path]`}
                      render={({ field: { value, onChange, ...field } }) => {
                        return (
                          <TextField
                            {...field}
                            value={value?.fileName}
                            onChange={(event: any) => {
                              onChange(event.target.files[0]);
                            }}
                            type="file"
                            id="picture"
                          />
                        );
                      }}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <label htmlFor="liability_path">liability path</label>
                    <Controller
                      control={methods.control}
                      name={`information.[${index}][liability_path]`}
                      render={({ field: { value, onChange, ...field } }) => {
                        return (
                          <TextField
                            {...field}
                            value={value?.fileName}
                            onChange={(event: any) => {
                              onChange(event.target.files[0]);
                            }}
                            type="file"
                            id="picture"
                          />
                        );
                      }}
                    />
                  </Grid>

                  <Button
                    style={{
                      color: "red",
                      border: "1px solid black",
                      fontSize: "1rem",
                      margin: "0.4rem 0",
                    }}
                    type="button"
                    onClick={() => remove(index)}
                  >
                    Delete
                  </Button>
                </div>
              ))}
            </Grid>
            <Grid item xs={12}>
              {methods?.formState?.errors?.information?.message && (
                <p style={{ fontSize: "0.8rem", color: "red" }}>
                  {methods?.formState?.errors?.information?.message}
                </p>
              )}
            </Grid>
          </Grid>
        </>
      )}
    </div>
  );
};

export default SecondForm;
