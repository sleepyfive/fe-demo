import chalk from 'chalk'

export const logo = `
   
'        _                      __  _              
'       | |                    / _|(_)             
'   ___ | |  ___   ___  _   _ | |_  _ __   __  ___ 
'  / __|| | / _ \ / _ \| | | ||  _|| |\ \ / / / _ \
'  \__ \| ||  __/|  __/| |_| || |  | | \ V / |  __/
'  |___/|_| \___| \___| \__, ||_|  |_|  \_/   \___|
'                        __/ |                     
'                       |___/                      
`

export const printLogo = () => {
    console.log(chalk.green(logo))
}