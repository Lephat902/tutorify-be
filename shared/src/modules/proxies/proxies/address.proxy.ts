import { Inject, Injectable } from "@nestjs/common";
import { ClientProxy } from "@nestjs/microservices";
import { QueueNames, GeocodeResponseDto, AdministrativeSubdivisionResponseDto } from "../../..";
import { BaseProxy } from "./base.proxy";

@Injectable()
export class AddressProxy extends BaseProxy {
    constructor(
        @Inject(QueueNames.ADDRESS) client: ClientProxy,
    ) {
        super(client);
    }

    async getAllProvinces(timeoutDuration?: number) {
        return this.sendRequest<AdministrativeSubdivisionResponseDto[]>(
            'getAllProvinces',
            {},
            timeoutDuration
        );
    }

    async getAllDistricts(provinceId: string, timeoutDuration?: number) {
        return this.sendRequest<AdministrativeSubdivisionResponseDto[]>(
            'getAllDistricts',
            provinceId,
            timeoutDuration
        );
    }

    async getAllWards(districtId: string, timeoutDuration?: number) {
        return this.sendRequest<AdministrativeSubdivisionResponseDto[]>(
            'getAllWards',
            districtId,
            timeoutDuration
        );
    }

    async getProvinceByProvinceId(provinceId: string, timeoutDuration?: number) {
        if (!provinceId) return null;
        return this.sendRequest<AdministrativeSubdivisionResponseDto>(
            'getProvinceByProvinceId',
            provinceId,
            timeoutDuration
        );
    }

    async getFullAddressByDistrictCode(districtId: string, timeoutDuration?: number) {
        if (!districtId) return null;
        return this.sendRequest<AdministrativeSubdivisionResponseDto>(
            'getFullAddressByDistrictCode',
            districtId,
            timeoutDuration
        );
    }

    async getFullAddressByWardCode(wardId: string, timeoutDuration?: number) {
        if (!wardId) return null;
        return this.sendRequest<AdministrativeSubdivisionResponseDto>(
            'getFullAddressByWardCode',
            wardId,
            timeoutDuration
        );
    }

    async getProvinceByProvinceSlug(provinceSlug: string, timeoutDuration?: number) {
        if (!provinceSlug) return null;
        return this.sendRequest<AdministrativeSubdivisionResponseDto>(
            'getProvinceByProvinceSlug',
            provinceSlug,
            timeoutDuration
        );
    }

    async getFullAddressByDistrictSlug(districtSlug: string, timeoutDuration?: number) {
        if (!districtSlug) return null;
        return this.sendRequest<AdministrativeSubdivisionResponseDto>(
            'getFullAddressByDistrictSlug',
            districtSlug,
            timeoutDuration
        );
    }

    async getFullAddressByWardSlug(wardSlug: string, timeoutDuration?: number) {
        if (!wardSlug) return null;
        return this.sendRequest<AdministrativeSubdivisionResponseDto>(
            'getFullAddressByWardSlug',
            wardSlug,
            timeoutDuration
        );
    }

    getGeocodeFromAddressAndWardId(address: string, wardId: string, timeoutDuration?: number): Promise<GeocodeResponseDto> {
        return this.sendRequest<GeocodeResponseDto>('getGeocodeFromAddressAndWardId', { address, wardId }, timeoutDuration);
    }

    getGeocodeFromWardId(wardId: string, timeoutDuration?: number): Promise<GeocodeResponseDto> {
        return this.sendRequest<GeocodeResponseDto>('getGeocodeFromWardId', wardId, timeoutDuration);
    }

    getGeocodeFromDistrictId(districtId: string, timeoutDuration?: number): Promise<GeocodeResponseDto> {
        return this.sendRequest<GeocodeResponseDto>('getGeocodeFromDistrictId', districtId, timeoutDuration);
    }

    getGeocodeFromProvinceId(provinceId: string, timeoutDuration?: number): Promise<GeocodeResponseDto> {
        return this.sendRequest<GeocodeResponseDto>('getGeocodeFromProvinceId', provinceId, timeoutDuration);
    }
}
