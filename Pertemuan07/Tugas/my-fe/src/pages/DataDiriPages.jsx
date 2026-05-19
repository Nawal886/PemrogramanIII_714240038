export default function DataDiriPage() {
  return (
    <div className="space-y-5">
      <h2 className="text-xl font-bold">Data Diri</h2>

      <div className="flex flex-col items-center gap-4 sm:flex-row sm:items-start">
        <div className="flex h-24 w-24 items-center justify-center rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 text-3xl font-bold text-white shadow-lg">
          N
        </div>

        <div className="space-y-1 text-center sm:text-left">
          <h3 className="text-lg font-semibold text-slate-800">Nawal</h3>
          <p className="text-sm text-slate-500">Mahasiswa D4 Teknik Informatika</p>
        </div>
      </div>

      <div className="overflow-hidden rounded-lg border">
        <table className="w-full text-left text-sm">
          <tbody className="divide-y">
            <tr className="hover:bg-blue-50">
              <td className="w-1/3 bg-slate-50 px-4 py-3 font-medium text-slate-600">NPM</td>
              <td className="px-4 py-3 text-slate-800">714240038</td>
            </tr>
            <tr className="hover:bg-blue-50">
              <td className="w-1/3 bg-slate-50 px-4 py-3 font-medium text-slate-600">Nama Lengkap</td>
              <td className="px-4 py-3 text-slate-800">Nawal</td>
            </tr>
            <tr className="hover:bg-blue-50">
              <td className="w-1/3 bg-slate-50 px-4 py-3 font-medium text-slate-600">Kelas</td>
              <td className="px-4 py-3 text-slate-800">D4 TI 2C</td>
            </tr>
            <tr className="hover:bg-blue-50">
              <td className="w-1/3 bg-slate-50 px-4 py-3 font-medium text-slate-600">Program Studi</td>
              <td className="px-4 py-3 text-slate-800">D4 Teknik Informatika</td>
            </tr>
            <tr className="hover:bg-blue-50">
              <td className="w-1/3 bg-slate-50 px-4 py-3 font-medium text-slate-600">Mata Kuliah</td>
              <td className="px-4 py-3 text-slate-800">Pemrograman III - Web Service</td>
            </tr>
            <tr className="hover:bg-blue-50">
              <td className="w-1/3 bg-slate-50 px-4 py-3 font-medium text-slate-600">Pertemuan</td>
              <td className="px-4 py-3 text-slate-800">Pertemuan 7 — Axios + Layout</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="rounded-lg border bg-gradient-to-r from-blue-50 to-indigo-50 p-4">
        <h3 className="mb-2 text-sm font-semibold uppercase text-blue-600">
          Teknologi yang Dipelajari
        </h3>
        <div className="flex flex-wrap gap-2">
          {["React", "Vite", "Tailwind CSS", "Axios", "REST API", "Component Layout"].map(
            (tech) => (
              <span
                key={tech}
                className="rounded-full bg-white px-3 py-1 text-xs font-medium text-blue-700 shadow-sm"
              >
                {tech}
              </span>
            )
          )}
        </div>
      </div>
    </div>
  );
}
