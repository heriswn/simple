import * as React from "react"
import Layout from "../components/layout";

const IndexPage = () => {
  return (
    <Layout>
      <article className="w-[400px] p-[8px] font-sans text-[13px]">
        <h1>Home Page</h1>
        <section>
          <h2>Experience</h2>
          <p>
            Welcome to the Gatsby Tutorial! We’re excited you’re here. Before
            you start building your first Gatsby site, you’ll need to
            familiarize yourself with some core web technologies and make sure
            that you have installed all required software tools. By the end of
            this part of the Tutorial, you will:
          </p>
          <p>
            Welcome to the Gatsby Tutorial! We’re excited you’re here. Before
            you start building your first Gatsby site, you’ll need to
            familiarize yourself with some core web technologies and make sure
            that you have installed all required software tools. By the end of
            this part of the Tutorial, you will:
          </p>
        </section>
        <section>
          <h2>Privacy</h2>
          <p>
            Now that you’ve got your page structure set up, it’s time to add
            some style and make it cute! Gatsby isn’t strict about what styling
            approach you use. You can pick whatever system you’re most
            comfortable with. In this Tutorial, you’ll use CSS Modules to style
            your components. This means that styles will be scoped to
            components, which helps avoid class naming collisions between
            components. Gatsby is automatically configured to handle CSS Modules
            - no extra setup necessary!
          </p>
        </section>
      </article>
    </Layout>
  );
}

export default IndexPage
