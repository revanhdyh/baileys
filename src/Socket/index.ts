
import { DEFAULT_CONNECTION_CONFIG } from '../Defaults'
import type { UserFacingSocketConfig } from '../Types'
import { makeCommunitiesSocket } from './communities'

// REVANHDYH BAILEYS CREDIT
const showRevanhdyhCredit = () => {
	console.log(
		'\x1b[36m' +
		`
╔══════════════════════════════════════════╗
║                                          
║           REVANHDYH BAILEYS               
║                                          
╠══════════════════════════════════════════╣
║  Developer : REVANHDYH                    
║  Library   : @revanhdyh/baileys           
║  GitHub    : github.com/revanhdyh/baileys 
║  Version   : Custom Fork                  
║                                          
║       THANKS FOR USING MY LIBRARY         
║                                          
╚══════════════════════════════════════════╝
		` +
		'\x1b[0m'
	)
}

// Export the last socket layer
const makeWASocket = (config: UserFacingSocketConfig) => {
	showRevanhdyhCredit()

	const newConfig = {
		...DEFAULT_CONNECTION_CONFIG,
		...config
	}

	return makeCommunitiesSocket(newConfig)
}

export default makeWASocket
