export interface Environment {
    production: boolean;
    tastfultreasureApiUrl: string;
}
export const environment: Environment = {
    production: false,
    tastfultreasureApiUrl: "https://localhost:8080/api"
};
