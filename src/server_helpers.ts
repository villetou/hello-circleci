export const isHeroku = process.env.NODE && process.env.NODE.indexOf('heroku') !== -1 ? true : false

// https://github.com/jaredpalmer/razzle/issues/356#issuecomment-432344585
// A simple workaround for circumventing baking ports into the build
export const getEnv = (key: string) => process.env[key]