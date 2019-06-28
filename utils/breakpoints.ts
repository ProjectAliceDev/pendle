import facepaint from 'facepaint';

export const breakpoints = facepaint([
	'@media(min-width: 420px)',
  	'@media(min-width: 768px)',
  	'@media(min-width: 1120px)'
]);

export default breakpoints;