import { useState, useEffect } from 'react';
import { getTripDetail, decideCandidate } from "../services/ApiRequest";
import { useParams } from "react-router-dom";

const useTripDetails = () => {
  
  useEffect(() => {
    handleGetTripDetail();
    // eslint-disable-next-line
  }, []);

  const { id } = useParams();
  const [ detail, setDetail ] = useState([]);
  const [ loading, setLoading ] = useState(false);

  const handleGetTripDetail = async () => {
    setLoading(true);
    setDetail(await getTripDetail(id));
    setLoading(false);
  };

  const handleDecideCandidate = async (choice, tripId, candidateId) => {
    await decideCandidate(choice, tripId, candidateId)
    handleGetTripDetail()
  }

  return { detail, loading, handleGetTripDetail, handleDecideCandidate }
};

export default useTripDetails;
