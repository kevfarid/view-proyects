import ENV from '../src/setupENV'

export const env = 'local'

export const server = {
  port: 4000,
  domain: 'localhost',
  logger: ' ',
}

export const database = {
  name: ENV.DB_NAME,
  host: ENV.DB_HOST,
  user: ENV.DB_USER,
  pass: ENV.DB_PASS,
  uri: `mongodb+srv://${ENV.DB_USER}:${ENV.DB_PASS}@${ENV.DB_HOST}/${ENV.DB_NAME}?retryWrites=true&w=majority`,
}
