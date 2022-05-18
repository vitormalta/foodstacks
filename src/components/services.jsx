export const Services = (props) => {
  return (
      <div id='services' className='text-center'>
        <div className='container'>
          <div className='section-title'>
            <h2>Lojas</h2>
            <p>
              A fome bateu? Veja o que estão vendendo pelas proximidades.
            </p>
          </div>
          <div className='row'>
            {props.data.map((d) => (
              <div key={d.id} className='col-md-4'>
                {' '}
                <div className='service-desc'>
                  <h3>{d.name}</h3>
                  <p>{d.description}</p>
                  <p>Imediações: {d.locations[0].name}</p>
                  <p>Categorias: {d.categories.map(cat => `#${cat.name} `)}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
  )
}
