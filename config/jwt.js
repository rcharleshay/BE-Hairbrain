/*******************************************
* © 2017 Hairbrain inc.
* ---------------------
* Created: February 11th 2017
* Last Modified: March 21st 2017
* Author: Charlie Hay
*
* JWT Config
/******************************************/

// Set the secret and unprotected paths. 
module.exports = {
    'secret'   : 'montreal 2030 rue du fort',
    'except'   : [
    	new RegExp('/login.*/', 'i'), 
    	new RegExp('/register.*/', 'i'), 
    	new RegExp('/photo.*/', 'i'),
    	new RegExp('/avatar.*/', 'i'),
    	new RegExp('/rating.*/', 'i')
    ]
};
