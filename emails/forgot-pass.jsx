import {
  Body,
  Container,
  Head,
  Heading,
  Html,
  Img,
  Link,
  Section,
  Text,
  Button,
} from "@react-email/components";
import { AlignCenter } from "lucide-react";
import * as React from "react";

const baseUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : "localhost:3000";

export const PlaidVerifyIdentityEmail = ({ validationCode }) => (
  <Html>
    <Head />
    <Body style={main}>
      <Container style={container}>
        {/* <Img
          src="https://imgur.com/a/rumRoZd"
          width="212"
          height="88"
          alt="Theca"
          style={logo}
        /> */}
        <Text style={primary}>Theca</Text>
        <Text style={tertiary}>Reset Password</Text>
        <Heading style={secondary}>
          Click the button below to reset your password.
        </Heading>
        <Section style={codeContainer}>
          <Button href="https://example.com" style={button}>
            Reset
          </Button>
        </Section>
      </Container>
    </Body>
  </Html>
);

PlaidVerifyIdentityEmail.PreviewProps = {
  validationCode: "144833",
};

export default PlaidVerifyIdentityEmail;

const button = {
  color: "#fff",
  display: "inline-block",
  fontFamily: "HelveticaNeue-Bold",
  fontSize: "32px",
  fontWeight: 700,
  lineHeight: "40px",
  paddingBottom: "8px",
  paddingTop: "8px",
  margin: "auto",
  width: "100%",
  backgroundColor: "#0a85ea",
  borderRadius: "16px",
  textAlign: "center",
};
const main = {
  backgroundColor: "#0E0E14",
  fontFamily: "HelveticaNeue,Helvetica,Arial,sans-serif",
};

const primary = {
  color: "#0a85ea",
  fontFamily: "HelveticaNeue-Medium,Helvetica,Arial,sans-serif",
  fontSize: "24px",
  fontWeight: 700,
  lineHeight: "32px",
  textAlign: "center",
  textTransform: "uppercase",
  margin: "0",
};

const container = {
  backgroundColor: "#0E0E14",
  border: "1px solid #1e1e1e",
  borderRadius: "5px",
  boxShadow: "0 5px 10px rgba(20,50,70,.2)",
  marginTop: "20px",
  maxWidth: "360px",
  margin: "0 auto",
  padding: "32px 20px",
  alignText: "center",
  verticalAlign: "middle",
  textAlign: "center",
};

const logo = {
  margin: "0 auto",
};

const tertiary = {
  color: "#fff",
  fontSize: "11px",
  fontWeight: 700,
  fontFamily: "HelveticaNeue,Helvetica,Arial,sans-serif",
  height: "16px",
  letterSpacing: "0",
  lineHeight: "16px",
  margin: "0",
  marginBottom: "32px",
  textTransform: "uppercase",
  textAlign: "center",
};

const secondary = {
  color: "#fff",
  display: "inline-block",
  fontFamily: "HelveticaNeue-Medium,Helvetica,Arial,sans-serif",
  fontSize: "20px",
  fontWeight: 500,
  lineHeight: "24px",
  marginBottom: "0",
  marginTop: "0",
  textAlign: "center",
};

const codeContainer = {
  background: "rgba(255,255,255,.05)",
  borderRadius: "4px",
  margin: "32px auto",
  verticalAlign: "middle",
  width: "280px",
};

const code = {
  color: "#fff",
  display: "inline-block",
  fontFamily: "HelveticaNeue-Bold",
  fontSize: "32px",
  fontWeight: 700,
  letterSpacing: "6px",
  lineHeight: "40px",
  paddingBottom: "8px",
  paddingTop: "8px",
  margin: "0 auto",
  width: "100%",
  textAlign: "center",
};

const paragraph = {
  color: "#444",
  fontSize: "15px",
  fontFamily: "HelveticaNeue,Helvetica,Arial,sans-serif",
  letterSpacing: "0",
  lineHeight: "23px",
  padding: "0 40px",
  margin: "0",
  textAlign: "center",
};

const link = {
  color: "#444",
  textDecoration: "underline",
};

const footer = {
  color: "#000",
  fontSize: "12px",
  fontWeight: 800,
  letterSpacing: "0",
  lineHeight: "23px",
  margin: "0",
  marginTop: "20px",
  fontFamily: "HelveticaNeue,Helvetica,Arial,sans-serif",
  textAlign: "center",
  textTransform: "uppercase",
};
