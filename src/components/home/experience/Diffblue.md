# Diffblue

## Software Engineer

During my time there, Diffblue functioned with the mindset of an agile startup. Averaging around 40-50 employees, I was part of a small but cohesive unit that had its own primary responsibilities, whilst helping out across all products as needed.

At the core of Diffblue was [Cover](https://www.diffblue.com/products). This used a purpose-built AI solution to autonomously write Java unit tests. Diffblue offered a range of products and features to help utilise and compliment this core offering.

Firstly, there were the 3 main products through which tests can be created - this is:

- **Cover CLI**
- **Cover Intellij Plugin**
- **Cover CI pipeline integration**

Secondly, there were also tools that provide extra utility on top. These are:

- **Cover Reports**
  - A responsive web app that allows the user to view their code coverage and understand risks in their codebase
- **Cover Refactor**
  - Providing functionality to provide automatic refactorings to your code to improve testability and code coverage
- **Cover Optimize**
  - Provides acceleration for the users CI pipeline, but only running tests relevant to their code changes

At Diffblue, I worked on the 'UI' team. Here, my responsibilities were primarily concerned with the Intellij Plugin, Cover Reports and the front-end side of the CLI. As a result, I have worked heavily with Java and Spring as well as React, Typescript and SASS. I have also worked with SQL, groovy & Kotlin and used templating languages like Yaml and Markdown.

I have worked on a range of features across this space, including licensing, telemetry, robot tests, coverage graphs & visualisations, exception handling and serialization.

One key feature I've worked on is environment checks. In order to make sure that Cover would be able to write good, working tests, it must check the users environment to make sure it is suitable. For this, I implemented an entire UI panel in Intellij that gives an overview of every check that we have performed, depending the environment, including warning messages, tips on how to fix erroneous states and a button to integrate Cover Refactor to automatically fix certain issues.

I also worked on environment checks for Cover Reports, since we need to be able to calculate the coverage of the project to be able to generate coverage reports for them. We use JaCoCo to generate these reports, but we need to make sure that this will work successfully. As a result, I performed analysis on JaCoCo with different versions of JUnit & Surefire and generated a range of user messages to help users fix their environment and ensure they get useful reports.
