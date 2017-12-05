import request from './request';

function list() {
  console.log('video.list');
  return request({method: 'GET'});
}

function get(id) {
  return request({url: `${id}`, method: 'GET'});
}

function create(metadata) {
  return request({method: 'POST', metadata});
}

const video = {
  list,
  get,
  create
}

export default video;
