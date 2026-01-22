// File: web/src/lib/auth-client.ts

/**
 * Client-side authentication utilities
 * For use in React components
 */

// In development, use proxy. In production, use full URL or relative path
const AUTH_API_URL = import.meta.env.PROD 
  ? (import.meta.env.VITE_AUTH_API_URL || '/api/auth')
  : '/api/auth';

export async function signIn() {
  // NextAuth v5 signin - redirects to Discord OAuth
  // Specify the provider in the path and use full URL for callback
  const callbackUrl = window.location.origin + window.location.pathname;
  window.location.href = `${AUTH_API_URL}/signin/discord?callbackUrl=${encodeURIComponent(callbackUrl)}`;
}

export async function signOut() {
  const response = await fetch(`${AUTH_API_URL}/signout`, {
    method: 'POST',
    credentials: 'include',
  });
  
  if (response.ok) {
    window.location.href = '/';
  }
}

export async function getSession() {
  try {
    const response = await fetch(`${AUTH_API_URL}/session`, {
      credentials: 'include',
    });
    
    if (!response.ok) {
      return null;
    }
    
    return await response.json();
  } catch (error) {
    console.error('Failed to get session:', error);
    return null;
  }
}
