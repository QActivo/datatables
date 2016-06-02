var packageName = 'qactivo:datatables';
var where = 'client'; 
var version = '0.0.1';
var summary = 'Meteor Datatables Wrapper';
var gitLink = 'https://github.com/QActivo/datatables';
var documentationFile = 'README.md';

// Meta-data
Package.describe({
  name: packageName,
  version: version,
  summary: summary,
  git: gitLink,
  documentation: documentationFile
});

Package.onUse(function(api) {
  api.versionsFrom(['METEOR@0.9.0', 'METEOR@1.0']); // Meteor versions

  api.use('jquery', where); // Dependencies

  api.addFiles('datatables.js', where); // Files in use
  api.addFiles('datatables.css', where); 
});  