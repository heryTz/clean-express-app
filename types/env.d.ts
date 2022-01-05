declare namespace NodeJS {
    export interface ProcessEnv {
        NODE_ENV: 'dev' | 'prod'
        NODE_PORT: string
        DB_HOST: string
        DB_PORT: string
        DB_NAME: string
        DB_USER: string
        DB_PASSWORD: string
        ENABLE_DB_lOGING: string
    }
}