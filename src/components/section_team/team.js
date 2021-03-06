import React from "react"

export default class team extends React.Component {
  render() {
    return (
      <article className="section-team__content">
        <figure className="section-team__img">{this.props.figure()}</figure>
        <div className="section-team__description">
        
          <div className="section-team__data">
            <div className="section-team__name">{this.props.name}</div>
            <div className="section-team__social">
            <a
              href={this.props.twitterUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="section-team__icon"
            >
              <svg
                className="icon"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 96 99.87"
              >
                <g id="Capa_2" data-name="Capa 2">
                  <g id="icon-twitter">
                    <path
                      className="twitter"
                      d="M72,35.1a19.51,19.51,0,0,1-5.67,1.52,9.75,9.75,0,0,0,4.33-5.42,19.48,19.48,0,0,1-6.24,2.38,9.85,9.85,0,0,0-17,6.73,11.32,11.32,0,0,0,.25,2.25A27.93,27.93,0,0,1,27.35,32.24a9.66,9.66,0,0,0-1.33,5,9.84,9.84,0,0,0,4.38,8.2A10,10,0,0,1,26,44.19v.12a9.84,9.84,0,0,0,7.91,9.62,10.33,10.33,0,0,1-2.59.33,13.13,13.13,0,0,1-1.88-.16,9.88,9.88,0,0,0,9.2,6.83A19.73,19.73,0,0,1,26.37,65.1,18.81,18.81,0,0,1,24,65a27.86,27.86,0,0,0,15.1,4.41c18.09,0,28-15,28-28V40.11A21.38,21.38,0,0,0,72,35.1Z"
                    />
                  </g>
                </g>
              </svg>
            </a>
          </div>
          </div>
     
        </div>
      </article>
    )
  }
}
