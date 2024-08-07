
This guide walks you through the steps of deploying a Next.js application to Vercel, including the process of setting up necessary environment variables.


## Step 1: Create a Vercel Account

1. Go to [Vercel](https://vercel.com/).
2. Sign up for a new account or log in to your existing account.

## Step 2: Connect Your Git Repository

1. Once logged in, click on the **New Project** button.
2. Select the Git provider where your Next.js app is hosted (GitHub, GitLab, or Bitbucket).
3. If prompted, authorize Vercel to access your repositories.
4. Choose the repository containing your Next.js app and click **Import**.

## Step 3: Configure Project Settings

1. After importing the repository, Vercel will automatically detect that you're using Next.js and suggest default settings.
2. Review the settings and make any necessary adjustments.
3. Proceed to the **Environment Variables** section (or you can skip to deploying and add these later in the project settings).

## Step 4: Add Environment Variables
#### Sample of required variables exist in the .env.example file
1. In the **Environment Variables** section:
  - Click on the **Add** button to create a new environment variable.
  - Enter the **Name** of the environment variable (e.g., `NEXT_PUBLIC_API_URL`).
  - Enter the **Value** for the variable (e.g., `https://api.example.com`).
  - Set the environment(s) where this variable should be available: **Development**, **Preview**, or **Production**.
  - Click **Add** to save the variable.
2. Repeat the above steps for each environment variable your application requires.

## Step 5: Deploy the Application

1. Once you've set the necessary environment variables, click **Deploy**.
2. Vercel will build and deploy your Next.js app, and you'll see a progress indicator on the dashboard.
3. After deployment, you'll be given a unique Vercel URL where your app is live.

## Step 6: Configure Custom Domain (Optional)

1. If you want to use a custom domain, go to the **Domains** section in your Vercel project.
2. Add your custom domain and follow the instructions to configure your DNS settings.

## Step 7: Monitor and Manage Your Deployment

1. You can monitor your deployment status, view logs, and manage environment variables in the Vercel dashboard.
2. If you need to update environment variables or configurations, you can do so from the **Settings** tab in your project.

## Conclusion

Your Next.js app is now live on Vercel! You can continue pushing updates to your Git repository, and Vercel will automatically redeploy the latest version.

For more advanced configurations, visit the [Vercel documentation](https://vercel.com/docs).
