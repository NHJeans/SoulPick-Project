import { useEffect, useState } from 'react';
import { updateUserAfterOAuth } from '../../apis/auth';
import { useNavigate } from 'react-router-dom';
import { Loading } from './style';

const OAuthRedirectPage = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const updateUser = async () => {
      try {
        await updateUserAfterOAuth();
        navigate('/');
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    updateUser();
  }, [navigate]);

  if (loading) return <Loading />;
  if (error) return <p>Error: {error}</p>;

  return <></>;
};

export default OAuthRedirectPage;
