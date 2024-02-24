import { toast } from "react-toastify";
import request from "../../utils/request";
import { venteActions } from "../slices/venteSlice";

export const getVentes = () => {
  return async (dispatch) => {
    dispatch(venteActions.setLoading(true));
    dispatch(venteActions.setError(null));
    // dispatch(venteActions.setVentes(null));
    await request
      .get(`/api/ventes`)
      .then((res) => {
        console.log(res.data)
        dispatch(venteActions.setError(null));
        dispatch(venteActions.setVentes(res.data));
      })
      .catch((err) => {
        dispatch(venteActions.setLoading(false));
        dispatch(venteActions.setError(err.message));
      })
      .finally(() => dispatch(venteActions.setLoading(false)));
  };
};

export const getVenteById = (id,cb) => {
  return async (dispatch) => {

    dispatch(venteActions.setLoading(true));
    dispatch(venteActions.setvente(null));
    dispatch(venteActions.setError(null));
    await request
      .get(`/api/ventes/${id}`)
      .then((res) => {
        console.log(res.data)
        dispatch(venteActions.setError(null));
        dispatch(venteActions.setVente(res.data));
        cb && cb(res.data)
      })
      .catch((err) => {
        dispatch(venteActions.setVente(null));
        dispatch(venteActions.setLoading(false));
        dispatch(venteActions.setError(err.message));
      })
      .finally(() => dispatch(venteActions.setLoading(null)));
  };
};

export const createVente = ( data, cb) => {
  return async (dispatch) => {
    dispatch(venteActions.setError(null));
    await request
      .post(`/api/ventes`, data)
      .then((res) => {
        console.log(res.data)
        dispatch(venteActions.setError(null));
        dispatch(venteActions.addVente(res.data.vente));
        toast.success(res.data.message);
        cb && cb();
      })
      .catch((err) => {
        console.log(err)
        dispatch(venteActions.setLoading(false));
       
        toast.error(err.response.data.message);
      })
      .finally(() => dispatch(venteActions.setLoading(null)));
  };
};

export const removeVente = (id) => {
  return async (dispatch) => {
    dispatch(venteActions.setError(null));
    await request
      .delete(`/api/ventes/${id}`, { headers: {
        token: `${JSON.parse(localStorage.getItem("userInfo")).token}`,
      }},)
      .then((res) => {
        console.log(res.data)
        dispatch(venteActions.setError(null));
        dispatch(venteActions.removeVente(id));
        toast.success(res.data.message);
      })
      .catch((err) => {
        dispatch(venteActions.setLoading(false));
        toast.error(err.response.data.message);
      })
      .finally(() => dispatch(venteActions.setLoading(null)));
  };
};

export const updateVente = (id, data, cb) => {
  return async (dispatch) => {
    dispatch(venteActions.setError(null));
    await request
      .put(`/api/ventes/${id}`, data,{ headers: {
        token: `${JSON.parse(localStorage.getItem("userInfo")).token}`,
      }})
      .then((res) => {
        console.log(res.data)
        dispatch(venteActions.setError(null));
        toast.success(res.data.message);
        dispatch(venteActions.updateVente(res.data.vente));
        cb && cb();
      })
      .catch((err) => {
        console.log(err)
        dispatch(venteActions.setLoading(false));
 
        toast.error(err.response.data.message);
      })
      .finally(() => dispatch(venteActions.setLoading(null)));
  };
};