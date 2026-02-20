import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { Eye, EyeOff, Check, X, AlertCircle } from "lucide-react";

interface FormData {
  plano: string;
  nomeCompleto: string;
  genero: string;
  nomeSocial: string;
  usuario: string;
  email: string;
  pais: string;
  estado: string;
  cidade: string;
  celular: string;
  documento: string;
  dataNascimento: string;
  senha: string;
  confirmarSenha: string;
  termos: boolean;
}

interface PasswordValidation {
  length: boolean;
  uppercase: boolean;
  lowercase: boolean;
  number: boolean;
  special: boolean;
}

function validatePassword(password: string): PasswordValidation {
  return {
    length: password.length >= 6,
    uppercase: /[A-Z]/.test(password),
    lowercase: /[a-z]/.test(password),
    number: /[0-9]/.test(password),
    special: /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(password),
  };
}

function isPasswordValid(v: PasswordValidation): boolean {
  return v.length && v.uppercase && v.lowercase && v.number && v.special;
}

const ValidationItem = ({ ok, label }: { ok: boolean; label: string }) => (
  <div className={`flex items-center gap-1.5 text-xs transition-colors ${ok ? "text-accent" : "text-muted-foreground"}`}>
    {ok ? <Check className="w-3 h-3" /> : <X className="w-3 h-3" />}
    <span>{label}</span>
  </div>
);

const inputClass =
  "w-full bg-secondary border border-border rounded-lg px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/60 focus:border-primary transition-all";

const labelClass = "block text-sm font-medium text-foreground mb-1.5";

export default function FormPage() {
  const [form, setForm] = useState<FormData>({
    plano: "Ainda não decidi",
    nomeCompleto: "",
    genero: "",
    nomeSocial: "",
    usuario: "",
    email: "",
    pais: "",
    estado: "",
    cidade: "",
    celular: "",
    documento: "",
    dataNascimento: "",
    senha: "",
    confirmarSenha: "",
    termos: false,
  });

  const [showSenha, setShowSenha] = useState(false);
  const [showConfirmar, setShowConfirmar] = useState(false);
  const [errors, setErrors] = useState<Partial<Record<keyof FormData, string>>>({});
  const [submitting, setSubmitting] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const passwordValidation = validatePassword(form.senha);

  const set = (field: keyof FormData, value: string | boolean) => {
    setForm((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) setErrors((prev) => ({ ...prev, [field]: "" }));
  };

  const validate = (): boolean => {
    const newErrors: Partial<Record<keyof FormData, string>> = {};
    if (!form.nomeCompleto.trim()) newErrors.nomeCompleto = "Nome completo é obrigatório.";
    if (!form.usuario.trim()) newErrors.usuario = "Usuário é obrigatório.";
    if (!form.email.trim()) newErrors.email = "E-mail é obrigatório.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) newErrors.email = "E-mail inválido.";
    if (!form.senha) newErrors.senha = "Senha é obrigatória.";
    else if (!isPasswordValid(passwordValidation)) newErrors.senha = "A senha não atende aos requisitos.";
    if (!form.confirmarSenha) newErrors.confirmarSenha = "Confirme sua senha.";
    else if (form.senha !== form.confirmarSenha) newErrors.confirmarSenha = "As senhas não coincidem.";
    if (!form.termos) newErrors.termos = "Você deve aceitar os Termos de Uso.";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg("");
    if (!validate()) return;

    setSubmitting(true);
    try {
      const response = await fetch("https://workflow2.webprojeto.com.br/webhook/form-orayon", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          origem: "ai.webprojeto.com.br",
          timestamp: new Date().toISOString(),
          dados: {
            plano: form.plano,
            nomeCompleto: form.nomeCompleto,
            genero: form.genero,
            nomeSocial: form.nomeSocial,
            usuario: form.usuario,
            email: form.email,
            pais: form.pais,
            estado: form.estado,
            cidade: form.cidade,
            celular: form.celular,
            documento: form.documento,
            dataNascimento: form.dataNascimento,
            senha: form.senha,
          },
        }),
      });

      const data = await response.json();
      if (data?.success) {
        setSubmitted(true);
      } else {
        setErrorMsg(data?.error ?? "Erro ao enviar cadastro. Tente novamente.");
      }
    } catch {
      setErrorMsg("Erro ao enviar cadastro. Tente novamente.");
    } finally {
      setSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <>
        <Helmet>
          <title>Cadastro enviado — Orayon AI</title>
          <meta name="robots" content="noindex, nofollow" />
        </Helmet>
        <div className="min-h-screen bg-background flex flex-col items-center justify-center px-4 text-center">
          <div
            className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6"
            style={{ background: "var(--gradient-primary)" }}
          >
            <Check className="w-7 h-7 text-primary-foreground" />
          </div>
          <h1 className="text-2xl md:text-3xl font-bold text-foreground mb-3">
            Cadastro recebido!
          </h1>
          <p className="text-muted-foreground max-w-sm">
            Seus dados foram enviados com sucesso. Em breve você receberá mais informações por e-mail.
          </p>
        </div>
      </>
    );
  }

  return (
    <>
      <Helmet>
        <title>Cadastro — Orayon AI</title>
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>

      <div className="min-h-screen bg-background flex flex-col items-center justify-start py-12 px-4">
        {/* Header logo */}
        <div className="mb-8 flex flex-col items-center gap-2">
          <div
            className="w-10 h-10 rounded-xl flex items-center justify-center"
            style={{ background: "var(--gradient-primary)" }}
          >
            <span className="text-primary-foreground font-bold text-lg">O</span>
          </div>
          <span className="text-muted-foreground text-sm">Orayon AI</span>
        </div>

        <div className="w-full max-w-[640px]">
          <div className="glass-card rounded-2xl p-6 md:p-10" style={{ boxShadow: "var(--shadow-card)" }}>
            <h1 className="text-xl md:text-2xl font-bold text-foreground mb-1">
              Complete seu cadastro para continuar
            </h1>
            <p className="text-muted-foreground text-sm mb-8">Preencha os campos abaixo para criar sua conta.</p>

            <form onSubmit={handleSubmit} noValidate className="space-y-8">
              {/* ── SEÇÃO 1: DADOS PESSOAIS ── */}
              <section>
                <h2 className="text-base font-semibold text-foreground mb-4 flex items-center gap-2">
                  <span
                    className="w-6 h-6 rounded-full text-xs flex items-center justify-center font-bold text-primary-foreground"
                    style={{ background: "var(--gradient-primary)" }}
                  >
                    1
                  </span>
                  Dados Pessoais
                </h2>

                <div className="space-y-4">
                  {/* Nome Completo */}
                  <div>
                    <label className={labelClass}>
                      Nome Completo <span className="text-destructive">*</span>
                    </label>
                    <input
                      type="text"
                      placeholder="Seu nome completo"
                      value={form.nomeCompleto}
                      onChange={(e) => set("nomeCompleto", e.target.value)}
                      className={inputClass}
                    />
                    {errors.nomeCompleto && (
                      <p className="text-destructive text-xs mt-1 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" /> {errors.nomeCompleto}
                      </p>
                    )}
                  </div>

                  {/* Gênero */}
                  <div>
                    <label className={labelClass}>Gênero</label>
                    <select
                      value={form.genero}
                      onChange={(e) => set("genero", e.target.value)}
                      className={inputClass}
                    >
                      <option value="">Selecione</option>
                      <option value="masculino">Masculino</option>
                      <option value="feminino">Feminino</option>
                    </select>
                  </div>

                  {/* Nome Social */}
                  <div>
                    <label className={labelClass}>Nome Social</label>
                    <input
                      type="text"
                      placeholder="Nome social (opcional)"
                      value={form.nomeSocial}
                      onChange={(e) => set("nomeSocial", e.target.value)}
                      className={inputClass}
                    />
                  </div>

                  {/* Usuário */}
                  <div>
                    <label className={labelClass}>
                      Usuário <span className="text-destructive">*</span>
                    </label>
                    <input
                      type="text"
                      placeholder="@seunome"
                      value={form.usuario}
                      onChange={(e) => set("usuario", e.target.value)}
                      className={inputClass}
                    />
                    <p className="text-muted-foreground text-xs mt-1.5">
                      Seu link de indicação será gerado após o cadastro.
                    </p>
                    {errors.usuario && (
                      <p className="text-destructive text-xs mt-1 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" /> {errors.usuario}
                      </p>
                    )}
                  </div>

                  {/* E-mail */}
                  <div>
                    <label className={labelClass}>
                      E-mail <span className="text-destructive">*</span>
                    </label>
                    <input
                      type="email"
                      placeholder="seu@email.com"
                      value={form.email}
                      onChange={(e) => set("email", e.target.value)}
                      className={inputClass}
                    />
                    {errors.email && (
                      <p className="text-destructive text-xs mt-1 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" /> {errors.email}
                      </p>
                    )}
                  </div>
                </div>
              </section>

              <div className="border-t border-border" />

              {/* ── SEÇÃO 2: LOCALIZAÇÃO ── */}
              <section>
                <h2 className="text-base font-semibold text-foreground mb-4 flex items-center gap-2">
                  <span
                    className="w-6 h-6 rounded-full text-xs flex items-center justify-center font-bold text-primary-foreground"
                    style={{ background: "var(--gradient-primary)" }}
                  >
                    2
                  </span>
                  Localização
                </h2>

                <div className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className={labelClass}>País</label>
                      <input
                        type="text"
                        placeholder="Brasil"
                        value={form.pais}
                        onChange={(e) => set("pais", e.target.value)}
                        className={inputClass}
                      />
                    </div>
                    <div>
                      <label className={labelClass}>Estado</label>
                      <input
                        type="text"
                        placeholder="SP"
                        value={form.estado}
                        onChange={(e) => set("estado", e.target.value)}
                        className={inputClass}
                      />
                    </div>
                  </div>

                  <div>
                    <label className={labelClass}>Cidade</label>
                    <input
                      type="text"
                      placeholder="São Paulo"
                      value={form.cidade}
                      onChange={(e) => set("cidade", e.target.value)}
                      className={inputClass}
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className={labelClass}>Celular</label>
                      <input
                        type="tel"
                        placeholder="+55 (11) 99999-9999"
                        value={form.celular}
                        onChange={(e) => set("celular", e.target.value)}
                        className={inputClass}
                      />
                    </div>
                    <div>
                      <label className={labelClass}>Número do Documento</label>
                      <input
                        type="text"
                        placeholder="CPF / Passaporte"
                        value={form.documento}
                        onChange={(e) => set("documento", e.target.value)}
                        className={inputClass}
                      />
                    </div>
                  </div>

                  <div>
                    <label className={labelClass}>Data de Nascimento</label>
                    <input
                      type="date"
                      value={form.dataNascimento}
                      onChange={(e) => set("dataNascimento", e.target.value)}
                      className={inputClass}
                    />
                  </div>
                </div>
              </section>

              <div className="border-t border-border" />

              {/* ── SEÇÃO 3: SEGURANÇA ── */}
              <section>
                <h2 className="text-base font-semibold text-foreground mb-4 flex items-center gap-2">
                  <span
                    className="w-6 h-6 rounded-full text-xs flex items-center justify-center font-bold text-primary-foreground"
                    style={{ background: "var(--gradient-primary)" }}
                  >
                    3
                  </span>
                  Segurança
                </h2>

                <div className="space-y-4">
                  {/* Senha */}
                  <div>
                    <label className={labelClass}>
                      Senha <span className="text-destructive">*</span>
                    </label>
                    <div className="relative">
                      <input
                        type={showSenha ? "text" : "password"}
                        placeholder="Crie uma senha"
                        value={form.senha}
                        onChange={(e) => set("senha", e.target.value)}
                        className={`${inputClass} pr-10`}
                      />
                      <button
                        type="button"
                        onClick={() => setShowSenha((v) => !v)}
                        className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
                      >
                        {showSenha ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                      </button>
                    </div>

                    {/* Validação dinâmica */}
                    {form.senha.length > 0 && (
                      <div className="mt-3 grid grid-cols-2 gap-1.5 p-3 bg-muted/40 rounded-lg border border-border">
                        <ValidationItem ok={passwordValidation.length} label="Mín. 6 caracteres" />
                        <ValidationItem ok={passwordValidation.uppercase} label="1 letra maiúscula" />
                        <ValidationItem ok={passwordValidation.lowercase} label="1 letra minúscula" />
                        <ValidationItem ok={passwordValidation.number} label="1 número" />
                        <ValidationItem ok={passwordValidation.special} label="1 caractere especial" />
                      </div>
                    )}

                    {errors.senha && (
                      <p className="text-destructive text-xs mt-1 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" /> {errors.senha}
                      </p>
                    )}
                  </div>

                  {/* Confirmar Senha */}
                  <div>
                    <label className={labelClass}>
                      Confirmar Senha <span className="text-destructive">*</span>
                    </label>
                    <div className="relative">
                      <input
                        type={showConfirmar ? "text" : "password"}
                        placeholder="Repita a senha"
                        value={form.confirmarSenha}
                        onChange={(e) => set("confirmarSenha", e.target.value)}
                        className={`${inputClass} pr-10`}
                      />
                      <button
                        type="button"
                        onClick={() => setShowConfirmar((v) => !v)}
                        className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
                      >
                        {showConfirmar ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                      </button>
                    </div>
                    {form.confirmarSenha && form.senha !== form.confirmarSenha && (
                      <p className="text-destructive text-xs mt-1 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" /> As senhas não coincidem.
                      </p>
                    )}
                    {errors.confirmarSenha && !form.confirmarSenha && (
                      <p className="text-destructive text-xs mt-1 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" /> {errors.confirmarSenha}
                      </p>
                    )}
                  </div>
                </div>
              </section>

              <div className="border-t border-border" />

              {/* ── TERMOS ── */}
              <div>
                <label className="flex items-start gap-3 cursor-pointer group">
                  <div
                    onClick={() => set("termos", !form.termos)}
                    className={`mt-0.5 w-5 h-5 rounded border-2 flex-shrink-0 flex items-center justify-center transition-all cursor-pointer ${
                      form.termos ? "border-primary bg-primary" : "border-border group-hover:border-primary/60"
                    }`}
                  >
                    {form.termos && <Check className="w-3 h-3 text-primary-foreground" />}
                  </div>
                  <span className="text-sm text-muted-foreground leading-relaxed">
                    Li e aceito os{" "}
                    <span className="text-primary hover:underline cursor-pointer">Termos de Uso</span>
                  </span>
                </label>
                {errors.termos && (
                  <p className="text-destructive text-xs mt-1.5 ml-8 flex items-center gap-1">
                    <AlertCircle className="w-3 h-3" /> {errors.termos}
                  </p>
                )}
              </div>

              {/* ── ERRO GERAL ── */}
              {errorMsg && (
                <div className="flex items-center gap-2 p-4 rounded-xl border border-destructive/40 bg-destructive/10 text-destructive text-sm">
                  <AlertCircle className="w-4 h-4 flex-shrink-0" />
                  {errorMsg}
                </div>
              )}

              {/* ── BOTÃO SUBMIT ── */}
              <button
                type="submit"
                disabled={submitting}
                className="btn-primary w-full disabled:opacity-60 disabled:cursor-not-allowed disabled:scale-100"
              >
                {submitting ? "Enviando..." : "Cadastrar"}
              </button>
            </form>
          </div>

          <p className="text-center text-xs text-muted-foreground mt-6">
            © {new Date().getFullYear()} Orayon AI. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </>
  );
}
