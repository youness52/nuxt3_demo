import axios from 'axios'
export default function ({ $axios, redirect }) {
    // Retrieve API token from local storage
    if (process.client) {
    const apiToken = localStorage.getItem('apiToken');
    const router = useRouter();
    // If API token is not available, redirect to login page
    if (!apiToken) {
        router.push('/login');
    }


   
   
    }
    //axios.setHeader('Authorization', `Bearer 198|eBWWKkbc7CRw4EBDxDGtFbKMpZl5a0gUuRKKkRKq40e826bc`);
    
    // Attach API token to headers for authenticated requests
    //$axios.setHeader('Authorization', `Bearer 198|eBWWKkbc7CRw4EBDxDGtFbKMpZl5a0gUuRKKkRKq40e826bc`);
  }