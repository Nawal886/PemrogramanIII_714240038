import Swal from "sweetalert2";
import PageTitle from "../components/molecules/PageTitle";
import Button from "../components/atoms/Button";
import { getToken, getUser } from "../services/auth";

function decodeJwtPayload(token) {
  try {
    const base64Url = token.split(".")[1];
    const base64 = base64Url.replace(/-/g, "+").replace(/_/g, "/");
    const jsonPayload = decodeURIComponent(
      atob(base64)
        .split("")
        .map((c) => "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2))
        .join(""),
    );
    return JSON.parse(jsonPayload);
  } catch {
    return null;
  }
}

function formatTimestamp(unix) {
  if (!unix) return "-";
  return new Date(unix * 1000).toLocaleString("id-ID", {
    dateStyle: "long",
    timeStyle: "medium",
  });
}

export default function ProfilePage() {
  const user = getUser();
  const token = getToken();
  const payload = token ? decodeJwtPayload(token) : null;

  const handleShowToken = () => {
    Swal.fire({
      title: "Token JWT",
      html: `<p style="word-break:break-all;font-size:12px;text-align:left;background:#f1f5f9;padding:12px;border-radius:8px;max-height:180px;overflow-y:auto;font-family:monospace;">${token || "Token tidak ditemukan."}</p>`,
      icon: "info",
      confirmButtonText: "Tutup",
      showDenyButton: true,
      denyButtonText: "Salin Token",
      denyButtonColor: "#2563eb",
      width: "36rem",
      preDeny: () => {
        navigator.clipboard.writeText(token || "");
        Swal.showValidationMessage("Token berhasil disalin!");
        return false;
      },
    });
  };

  const handleCopyToken = async () => {
    if (!token) return;
    await navigator.clipboard.writeText(token);
    await Swal.fire({
      title: "Berhasil",
      text: "Token berhasil disalin ke clipboard.",
      icon: "success",
      confirmButtonText: "OK",
      timer: 1500,
      timerProgressBar: true,
    });
  };

  return (
    <div className="space-y-5">
      <PageTitle
        title="Profil"
        description="Informasi akun yang sedang login."
        actions={
          <div className="flex flex-wrap gap-2">
            <Button type="button" variant="secondary" onClick={handleCopyToken}>
              📋 Salin Token
            </Button>
            <Button type="button" onClick={handleShowToken}>
              🔑 Lihat Token
            </Button>
          </div>
        }
      />

      {/* User Info Card */}
      <div className="rounded-lg border border-slate-200 bg-slate-50 p-5">
        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <p className="text-xs font-medium uppercase tracking-wide text-slate-500">
              Username
            </p>
            <p className="mt-1 text-lg font-semibold text-slate-800">
              {user?.username ?? "-"}
            </p>
          </div>

          <div>
            <p className="text-xs font-medium uppercase tracking-wide text-slate-500">
              Role
            </p>
            <p className="mt-1 text-lg font-semibold text-slate-800">
              {user?.role ?? "-"}
            </p>
          </div>
        </div>
      </div>

      {/* JWT Payload Info */}
      {payload && (
        <div className="rounded-lg border border-blue-200 bg-blue-50 p-5">
          <h3 className="mb-3 text-sm font-semibold uppercase tracking-wide text-blue-700">
            Informasi Token JWT
          </h3>
          <div className="grid gap-3 sm:grid-cols-2">
            {payload.username && (
              <div>
                <p className="text-xs text-blue-500">Username (dari token)</p>
                <p className="mt-0.5 text-sm font-medium text-slate-800">
                  {payload.username}
                </p>
              </div>
            )}
            {payload.role && (
              <div>
                <p className="text-xs text-blue-500">Role (dari token)</p>
                <p className="mt-0.5 text-sm font-medium text-slate-800">
                  {payload.role}
                </p>
              </div>
            )}
            {payload.iat && (
              <div>
                <p className="text-xs text-blue-500">Dibuat pada (iat)</p>
                <p className="mt-0.5 text-sm font-medium text-slate-800">
                  {formatTimestamp(payload.iat)}
                </p>
              </div>
            )}
            {payload.exp && (
              <div>
                <p className="text-xs text-blue-500">Kedaluwarsa (exp)</p>
                <p className="mt-0.5 text-sm font-medium text-slate-800">
                  {formatTimestamp(payload.exp)}
                </p>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
