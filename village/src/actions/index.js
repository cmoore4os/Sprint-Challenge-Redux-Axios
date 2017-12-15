import axios from 'axios';

export const GET_SMURFS = "GET_SMURFS";
export const ADD_SMURF = "ADD_SMURF";

export const getSmurfs = () => {
  console.log("smurfing ...")
  const promise = axios.get('http:localhost:3333/smurfs');
  return {
    type: GET_SMURFS,
    payload: promise,
  }

}

export const addSmurf = (smurf) => {
  return {
    type: ADD_SMURF,
    payload: smurf
  }
}