
    const Layout = ({ children, data }) => (
        <div>
          <Helmet
            title={data.site.siteMetadata.title}
            meta={[
              { name: 'description', content: 'Sample' },
              { name: 'keywords', content: 'sample, something' },
              { name: 'charset', content: 'utf-8' }
            ]}
          />
          <Header siteTitle={data.site.siteMetadata.title} />
          <div className="container-fluid"> 
            {children()}
          </div>
        </div>
      )