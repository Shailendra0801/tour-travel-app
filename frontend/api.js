const API_URL = "http://localhost:5000";

export async function getPackages() {
    const response = await fetch("${API_URL}/packages");
    return response.json();
}