import { RegisterForm } from "@/components/forms/RegisterForm";
import { getUser } from "@/lib/actions/patient.actions";
import Image from "next/image";
import Link from "next/link";
import React from "react";

import * as Sentry from '@sentry/nextjs'

const Register = async ({ params: { userId } }: SearchParamProps) => {
  const user = await getUser(userId);

  Sentry.metrics.set("user_view_register", user.name);

  return (
    <div className="flex h-screen max-h-screen">
      {/* TODO: OTP verification | Pass key modal */}
      <section className="remove-scrollbar container">
        <div className="sub-container max-w-[860px] flex-1 flex-col py-12">
          <Image
            src={"/assets/icons/logo-full.svg"}
            width={1000}
            height={1000}
            alt="logo"
            className="mb-12 h-10 w-fit"
          />

          <RegisterForm user={user} />
            <p className="copyright py-10">
              © 2024 CarePulse
            </p>
            
        </div>
      </section>
      <Image
        src={"/assets/images/register-img.png"}
        width={1000}
        height={1000}
        alt="doctor"
        className="side-img max-w-[390px]"
      />
    </div>
  );
};

export default Register;
