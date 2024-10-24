import React from "react";

import BrannTitle from "components/ui/typo/Title";
import BrannPaper from "components/ui/box/Paper";
import CenteredContainer from "components/ui/box/CenteredContainer";
import Box from "components/ui/box/Box";
import RegisterForm from "components/auth/RegisterForm";
import BrannLink from "components/ui/typo/Link";

import AuthLayout from "layouts/Auth";

export default function Register() {
  return (
    <AuthLayout>
      <CenteredContainer>
        <Box width={350}>
          <BrannTitle text="Registro" align="center" />
          <BrannPaper>
            <RegisterForm />
          </BrannPaper>
          <Box marginTop={16}>
            <BrannLink href="/autenticación/acceso">
              Ya tienes una cuenta?
            </BrannLink>
          </Box>
        </Box>
      </CenteredContainer>
    </AuthLayout>
  );
}
