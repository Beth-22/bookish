// profile.ts

export interface UserProfile {
    username: string;
    email: string;
    books: {
        read: number;
        toRead: number;
        reading: number;
    };
}

// Fetch user profile data
export async function getUserProfile(): Promise<UserProfile> {
    const response = await fetch('/api/user/profile');
    if (!response.ok) {
        throw new Error('Failed to fetch user profile');
    }
    return await response.json();
}
