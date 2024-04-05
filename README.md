# Weekend Project - AI Art Generator

## For consolidating the knowledge acquired in this week, the students should complete the following project:

1. Create a github repository for your project
2. Add all members of your group
3. Create a README.md file with the description of your project
4. Create a new application from scratch using NextJS
5. Create an assistant in OpenAI that is able to suggest and describe a painting based on a short description from the user
6. Configure the assistant prompt to be efficient at answering strictly painting descriptions
7. Create a page for the user to pick an option from a selection of painting themes
8. Include a button to send a message to the assistant for it to generate a painting description with the selected theme
9. When the assistant answers, display the generated output in a text area
10. Create a button for the user to request the image to be generated based on the assistant's output
11. Create a form after the button for the user to choose the image generation parameters
12. Include a button to request the image to be generated
13. Ask the Image Generation API to generate the image
14. Display a loader while the image is being generated
15. Display the image in the page when it is generated
16. Submit your project in the submission form

## Next Steps

* Generating images with AI
* Running models locally
* Using Stable Diffusion WebUI
* Image generation models
* Prompting techniques for image generation

## Downloading and Running the Code Locally

First, clone the GitHub project repository:

```bash
git clone git@github.com:GoldAndLink/week-3-image-generator-assistant.git
```

In your **week-3-image-generator-assistant** folder, run the following command to get all of your npm packages:

```
npm install
```

Second, ensure that you have configured an OpenAI API Key on your computer. You can run the following command from Terminal in MacOS:

```bash
nano ~/.zshrc
```
Add your OpenAI API Key:
```
export OPENAI_API_KEY='your-api-key-here'
```
And then hit Ctrl+O to write the changes, followed by Ctrl+X to close the editor. Restart Terminal so it can pick up on the new environment variable.


Finally, run the app by entering the following command in Terminal:

```
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

