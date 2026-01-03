export default function CaseStudyCard({ client, industry, challenge, strategy, results }) {
  return (
    <div className="case-study-card">
      <div className="case-header">
        <h3>{client}</h3>
        <span className="case-industry">{industry}</span>
      </div>
      
      <div className="case-section">
        <h4>Challenge</h4>
        <p>{challenge}</p>
      </div>

      <div className="case-section">
        <h4>Strategy</h4>
        <p>{strategy}</p>
      </div>

      <div className="case-section case-results">
        <h4>Results</h4>
        <p>{results}</p>
      </div>
    </div>
  )
}