const contentfulManagement = require('contentful-management');

module.exports = function () {
  const contentfulClient = contentfulManagement.createClient({
    accessToken: 'CFPAT-62SxosZ_cvk5Do6atVNB_jIiX7rih5UnbsJPlXX-mSA',
  });

  return contentfulClient
    .getSpace('4mdisblx8pw1')
    .then((space) => space.getEnvironment('master'));
};
