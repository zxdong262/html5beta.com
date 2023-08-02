import { cp } from 'shelljs'

cp(
  '-r',
  'src/static/*',
  'public/'
)
