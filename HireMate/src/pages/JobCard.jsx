export default function JobCard({ job }) {
  return (
    <div key={job.id} className="p-4 border rounded-lg shadow">
      <h2 className="text-lg font-semibold">{job.title}</h2>
      <p>{job.description}</p>
    </div>
  );
}
