import { CONFIGS } from "@/configs";
import V1EmailLayout from "@/email-templates/layouts/v1-layout";
import { Text, Button, Heading, Section } from "@react-email/components";

interface EmailProp {
    firstName: string;
    resetLink: string;
}

export default function Email({ firstName, resetLink }: EmailProp) {
    return (
        <V1EmailLayout>
            <Section className="bg-white py-10 px-2 md:px-10">
                <Heading as="h2" className="text-xl font-bold">
                    Hi {firstName || "there"},
                </Heading>

                <Text className="text-lg font-normal">
                    Click the link below to reset your password. This link expires in <b>{(Number(CONFIGS.DEFAULT_DB_TOKEN_EXPIRY_DURATION) / (60 * 1000)).toFixed(0)} minutes.</b>
                </Text>

                <Button className="px-5 py-2.5 bg-black rounded text-lg font-normal text-white" href={resetLink}>
                    Reset your password
                </Button>

                <Text className="text-lg font-normal">
                    Thanks!
                    <br />
                    <b>nodejs-boilertemplate team</b>
                </Text>
            </Section>
        </V1EmailLayout>
    );
}
