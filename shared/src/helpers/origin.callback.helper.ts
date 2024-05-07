import { InternalServerErrorException } from "@nestjs/common";
import { Buffer } from "buffer";

const isDomainAllowed = (origin: string, allowedDomains: string[]): boolean => {
    return allowedDomains.includes(origin);
}

const isRegexAllowed = (origin: string, encodedRegexes: string[]): boolean => {
    for (const encodedRegex of encodedRegexes) {
        const decodedRegex = Buffer.from(encodedRegex, 'base64').toString('ascii');
        console.log(decodedRegex);
        const regex = new RegExp(decodedRegex);
        if (regex.test(origin)) {
            return true;
        }
    }
    return false;
}

export const originCallback = (
    origin: string,
    callback: (err: Error, origin?: boolean) => void
) => {
    if (!origin || origin === "null") {
        return callback(null, true);
    }
    const rawAllowedDomains: string = process.env.ALLOWED_DOMAINS;
    const allowedDomains = rawAllowedDomains.split(',');

    if (isDomainAllowed(origin, allowedDomains)) {
        return callback(null, true);
    }

    const rawEncodedRegexes: string = process.env.ALLOWED_DOMAINS_REGEX;
    const encodedRegexes = rawEncodedRegexes.split(',');

    if (isRegexAllowed(origin, encodedRegexes)) {
        return callback(null, true);
    }

    return callback(new InternalServerErrorException('Not allowed by CORS'));
}
