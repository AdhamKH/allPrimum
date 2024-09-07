"use client";
import { Box, Modal } from "@mui/material";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useEffect } from "react";
import Swal from "sweetalert2";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 600,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const SelectForm = ({ open, handleClose }: any) => {
  const pathName = usePathname();
  useEffect(() => {
    handleClose();
  }, [pathName]);

  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <div className="">
          <h1 className="text-center from-neutral-900 text-4xl font-bold pb-10">
            Please select one of those
          </h1>
          <ul className="flex justify-between ">
            <Link href={"/sumitAjob"}>
              <li className="bg-primary p-8 text-text-secondary font-bold text-2xl">
                Submit a job
              </li>
            </Link>
            <li className="bg-primary p-8 text-text-secondary font-bold text-2xl">
              <Link href={"/sumitAjob"}>Become Boxbylder</Link>
            </li>
          </ul>
        </div>
      </Box>
    </Modal>
  );
};

export default SelectForm;
