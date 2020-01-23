import React from 'react';

import axios from 'axios';

var fileDownload = require('js-file-download');



export default class Download extends React.Component {

  render() {
    return (
      axios.get(`http://localhost/downloadFile`)
       .then((response) => {
            fileDownload(response.data, 'report.csv');
       })
  );}
}
