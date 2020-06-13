export const config = {
  "datasource": {
    "username": process.env.POSTGRESS_USERNAME,
    "password": process.env.POSTGRESS_PASSWORD,
    "database": process.env.POSTGRESS_DB,
    "host": process.env.POSTGRESS_HOST,
    "dialect": "postgres",
  },
  "jwksUrl": process.env.JWKS_URL,
  "url": process.env.URL
}
