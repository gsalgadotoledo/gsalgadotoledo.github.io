import Reflux from 'reflux';

let JobActions = Reflux.createActions([
  'getJobs',
  'getLanguages',
  'getSkills',
  'getEducation'
]);

export default JobActions;