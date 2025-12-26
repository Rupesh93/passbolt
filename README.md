🔹 Setup Instructions

Follow these steps to run the Secure Vault application locally:

# Secure Vault App

## 🛠️ Setup Instructions

### Step 1  
**Clone the Project**

```bash
    git clone https://github.com/Rupesh93/passbolt.git

Step 2
Checkout to the master branch
    git checkout master

Step 3
Create the environment file, In the root of the project, create a file named:

.env.local
Inside it, add the following:
NEXT_PUBLIC_STORAGE_KEY=secure-vault
You can replace secure-vault with any string you prefer — this will be used as the key for saving encrypted data in localStorage.

Step 4
Install dependencies
    npm install

Step 5
Start the development server
   npm run dev

🎉 Open in Browser
Once the server is running, open:
http://localhost:3000
