"use client";
import { Grid, TextField } from "@mui/material";
import React from "react";
import styles from "./style.module.scss";
import StanderInput from "@/conponents/inputs/standerInput";
import SelectInput from "@/conponents/inputs/SelectInput/SelectInput";
import { Controller } from "react-hook-form";
const data = [
  {
    id: "1",
    name: "Install and BOS only",
    value: "install_bos",
  },
  {
    id: "2",
    name: "Permit",
    value: "permit",
  },
  {
    id: "3",
    name: "Project Management",
    value: "project_management",
  },
  {
    id: "4",
    name: "All services",
    value: "all_services",
  },
];
const FirstForm = ({ methods, companyObj }: any) => {
  return (
    <div>
      <Grid container columns={12} spacing={3}>
        <Grid item xs={12}>
          <div className={styles.companyInfoContainer}>
            <h2 className={styles.title}>Company Information</h2>
            <hr className={styles.line} />
          </div>
        </Grid>
        <Grid item xs={12} md={6} lg={6}>
          <StanderInput name="company_name" Label="company" />
        </Grid>

        <Grid item xs={12} md={6} lg={6}>
          <StanderInput name="company_phone" Label="Company phone" />
        </Grid>
        <Grid item xs={12} md={6} lg={6}>
          <StanderInput
            name="company_email"
            Label="Company email"
            type="email"
          />
        </Grid>
        <Grid item xs={12} md={6} lg={6}>
          <StanderInput
            name="company_website"
            Label="Company website"
            type="email"
          />
        </Grid>
        <Grid item xs={12} md={6} lg={6}>
          <label htmlFor="company_logo">Company logo</label>
          <Controller
            control={methods.control}
            name={"company_logo"}
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
          {methods?.formState?.errors?.company_logo?.message && (
            <p style={{ fontSize: "0.8rem", color: "red" }}>
              {methods?.formState?.errors?.company_logo?.message}
            </p>
          )}
        </Grid>
      </Grid>
    </div>
  );
};

export default FirstForm;
