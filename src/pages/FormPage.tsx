import { useState } from 'react';
import { Check, X } from 'lucide-react';

const BRAZIL_STATES = [
  'AC','AL','AP','AM','BA','CE','DF','ES','GO','MA','MT','MS','MG',
  'PA','PB','PR','PE','PI','RJ','RN','RS','RO','RR','SC','SP','SE','TO'
];

const COUNTRIES = [
  'Brasil','Argentina','Bolívia','Chile','Colômbia','Equador','Paraguai',
  'Peru','Uruguai','Venezuela','Portugal','Estados Unidos','Outro'
];

type FormData = {
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
};

type Errors = Partial<Record<keyof FormData, string>>;

const initialData: FormData = {
  plano: '', nomeCompleto: '', genero: '', nomeSocial: '', usuario: '',
  email: '', pais: '', estado: '', cidade: '', celular: '', documento: '',
  dataNascimento: '', senha: '', confirmarSenha: '', termos: false,
};

const checkPassword = (senha: string) => ({
  minLength: senha.length >= 6,
  uppercase: /[A-Z]/.test(senha),
  lowercase: /[a-z]/.test(senha),
  number: /[0-9]/.test(senha),
  special: /[^A-Za-z0-9]/.test(senha),
});

const SectionTitle = ({ number, title }: { number: string; title: string }) => (
  <div className="flex items-center gap-3 mb-6">
    <div
      className="w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0"
      style={{ background: 'var(--gradient-accent)' }}
    >
      {number}
    </div>
    <h2 className="text-lg font-semibold text-foreground">{title}</h2>
  </div>
);

const FieldLabel = ({ children, required }: { children: React.ReactNode; required?: boolean }) => (
  <label className="block text-sm font-medium text-foreground/80 mb-1.5">
    {children}
    {required && <span className="text-destructive ml-1">*</span>}
  </label>
);

const ErrorMsg = ({ msg }: { msg?: string }) =>
  msg ? <p className="text-destructive text-xs mt-1">{msg}</p> : null;

const inputClass = (error?: string) =>
  `w-full px-4 py-2.5 rounded-lg bg-secondary border text-foreground text-sm transition-colors focus:outline-none focus:ring-2 focus:ring-ring ${
    error ? 'border-destructive' : 'border-border'
  }`;

const selectClass = (error?: string) =>
  `w-full px-4 py-2.5 rounded-lg bg-secondary border text-foreground text-sm transition-colors focus:outline-none focus:ring-2 focus:ring-ring appearance-none ${
    error ? 'border-destructive' : 'border-border'
  }`;

export default function FormPage() {
  const [form, setForm] = useState<FormData>(initialData);
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  const passwordChecks = checkPassword(form.senha);
  const allPasswordValid = Object.values(passwordChecks).every(Boolean);

  const set = (field: keyof FormData, value: string | boolean) =>
    setForm(prev => ({ ...prev, [field]: value }));

  const validate = (): boolean => {
    const e: Errors = {};
    if (!form.plano) e.plano = 'Selecione um plano.';
    if (!form.nomeCompleto.trim()) e.nomeCompleto = 'Nome completo é obrigatório.';
    if (!form.usuario.trim()) e.usuario = 'Usuário é obrigatório.';
    if (!form.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      e.email = 'E-mail inválido.';
    if (!form.senha) e.senha = 'Senha é obrigatória.';
    else if (!allPasswordValid) e.senha = 'A senha não atende aos critérios.';
    if (!form.confirmarSenha) e.confirmarSenha = 'Confirme a senha.';
    else if (form.senha !== form.confirmarSenha) e.confirmarSenha = 'As senhas não coincidem.';
    if (!form.termos) e.termos = 'Você precisa aceitar os Termos de Uso.';
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setStatus('sending');
    try {
      const res = await fetch('https://workflow2.webprojeto.com.br/webhook/form-orayon', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          origem: 'ai.webprojeto.com.br',
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
      setStatus(res.ok ? 'success' : 'error');
    } catch {
      setStatus('error');
    }
  };

  const sectionClass =
    'rounded-2xl border border-border bg-card p-6 md:p-8 space-y-5';

  const CheckItem = ({ ok, label }: { ok: boolean; label: string }) => (
    <div className={`flex items-center gap-2 text-xs ${ok ? 'text-accent' : 'text-muted-foreground'}`}>
      {ok ? <Check className="w-3.5 h-3.5 flex-shrink-0" /> : <X className="w-3.5 h-3.5 flex-shrink-0" />}
      <span>{label}</span>
    </div>
  );

  return (
    <div className="min-h-screen bg-background py-12 px-4">
      <div className="max-w-[1000px] mx-auto">

        {/* Header do formulário */}
        <div className="text-center mb-10">
          <h1 className="text-3xl md:text-4xl font-bold gradient-text mb-2">Cadastro Orayon</h1>
          <div
            className="inline-block mt-3 px-5 py-2 rounded-full text-sm font-medium border"
            style={{
              background: 'hsl(var(--accent) / 0.1)',
              borderColor: 'hsl(var(--accent) / 0.3)',
              color: 'hsl(var(--accent))',
            }}
          >
            Você foi indicado por: <strong>rodrigo</strong>
          </div>
        </div>

        <form onSubmit={handleSubmit} noValidate className="space-y-6">

          {/* SEÇÃO 1 — Plano */}
          <div className={sectionClass}>
            <SectionTitle number="1" title="Selecione seu plano" />
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                { value: 'explorer', label: 'Explorer', sub: '50 pontos' },
                { value: 'builder', label: 'Builder', sub: '200 pontos' },
                { value: 'legacy', label: 'Legacy', sub: '600 pontos' },
                { value: 'nao_decidido', label: 'Ainda não decidi', sub: '' },
              ].map(opt => (
                <label
                  key={opt.value}
                  className={`flex items-center gap-3 p-4 rounded-xl border cursor-pointer transition-all ${
                    form.plano === opt.value
                      ? 'border-accent bg-accent/10'
                      : 'border-border hover:border-border/80 bg-secondary/40'
                  }`}
                >
                  <input
                    type="radio"
                    name="plano"
                    value={opt.value}
                    checked={form.plano === opt.value}
                    onChange={() => set('plano', opt.value)}
                    className="accent-accent"
                  />
                  <div>
                    <span className="font-semibold text-sm text-foreground">{opt.label}</span>
                    {opt.sub && (
                      <span className="block text-xs text-muted-foreground">{opt.sub}</span>
                    )}
                  </div>
                </label>
              ))}
            </div>
            <ErrorMsg msg={errors.plano} />
          </div>

          {/* SEÇÃO 2 — Usuário */}
          <div className={sectionClass}>
            <SectionTitle number="2" title="Usuário" />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

              <div className="md:col-span-2">
                <FieldLabel required>Nome Completo</FieldLabel>
                <input
                  type="text"
                  value={form.nomeCompleto}
                  onChange={e => set('nomeCompleto', e.target.value)}
                  placeholder="Seu nome completo"
                  className={inputClass(errors.nomeCompleto)}
                />
                <ErrorMsg msg={errors.nomeCompleto} />
              </div>

              <div>
                <FieldLabel>Gênero</FieldLabel>
                <select
                  value={form.genero}
                  onChange={e => set('genero', e.target.value)}
                  className={selectClass()}
                >
                  <option value="">Selecione</option>
                  <option value="masculino">Masculino</option>
                  <option value="feminino">Feminino</option>
                </select>
              </div>

              <div>
                <FieldLabel>Nome Social <span className="text-muted-foreground text-xs">(opcional)</span></FieldLabel>
                <input
                  type="text"
                  value={form.nomeSocial}
                  onChange={e => set('nomeSocial', e.target.value)}
                  placeholder="Como prefere ser chamado(a)"
                  className={inputClass()}
                />
              </div>

              <div>
                <FieldLabel required>Usuário</FieldLabel>
                <input
                  type="text"
                  value={form.usuario}
                  onChange={e => set('usuario', e.target.value)}
                  placeholder="@seu_usuario"
                  className={inputClass(errors.usuario)}
                />
                <ErrorMsg msg={errors.usuario} />
                <p className="text-xs text-muted-foreground mt-1.5">
                  Seu link de indicação será gerado após o cadastro.
                </p>
              </div>

              <div>
                <FieldLabel required>E-mail</FieldLabel>
                <input
                  type="email"
                  value={form.email}
                  onChange={e => set('email', e.target.value)}
                  placeholder="seu@email.com"
                  className={inputClass(errors.email)}
                />
                <ErrorMsg msg={errors.email} />
              </div>

            </div>
          </div>

          {/* SEÇÃO 3 — Dados de cadastro */}
          <div className={sectionClass}>
            <SectionTitle number="3" title="Dados de cadastro" />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

              <div>
                <FieldLabel>País</FieldLabel>
                <select
                  value={form.pais}
                  onChange={e => set('pais', e.target.value)}
                  className={selectClass()}
                >
                  <option value="">Selecione o país</option>
                  {COUNTRIES.map(c => <option key={c} value={c}>{c}</option>)}
                </select>
              </div>

              <div>
                <FieldLabel>Estado</FieldLabel>
                <select
                  value={form.estado}
                  onChange={e => set('estado', e.target.value)}
                  className={selectClass()}
                >
                  <option value="">Selecione o estado</option>
                  {BRAZIL_STATES.map(s => <option key={s} value={s}>{s}</option>)}
                </select>
              </div>

              <div>
                <FieldLabel>Cidade</FieldLabel>
                <input
                  type="text"
                  value={form.cidade}
                  onChange={e => set('cidade', e.target.value)}
                  placeholder="Sua cidade"
                  className={inputClass()}
                />
              </div>

              <div>
                <FieldLabel>Celular</FieldLabel>
                <input
                  type="tel"
                  value={form.celular}
                  onChange={e => set('celular', e.target.value)}
                  placeholder="+55 (11) 00000-0000"
                  className={inputClass()}
                />
              </div>

              <div>
                <FieldLabel>Número do Documento</FieldLabel>
                <input
                  type="text"
                  value={form.documento}
                  onChange={e => set('documento', e.target.value)}
                  placeholder="CPF ou documento"
                  className={inputClass()}
                />
              </div>

              <div>
                <FieldLabel>Data de Nascimento</FieldLabel>
                <input
                  type="date"
                  value={form.dataNascimento}
                  onChange={e => set('dataNascimento', e.target.value)}
                  className={inputClass()}
                  style={{ colorScheme: 'dark' }}
                />
              </div>

            </div>
          </div>

          {/* SEÇÃO 4 — Senha */}
          <div className={sectionClass}>
            <SectionTitle number="4" title="Defina sua senha" />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

              <div>
                <FieldLabel required>Senha</FieldLabel>
                <input
                  type="password"
                  value={form.senha}
                  onChange={e => set('senha', e.target.value)}
                  placeholder="••••••••"
                  className={inputClass(errors.senha)}
                />
                <ErrorMsg msg={errors.senha} />
                {form.senha && (
                  <div className="mt-3 p-3 rounded-lg bg-secondary/50 grid grid-cols-2 gap-1.5">
                    <CheckItem ok={passwordChecks.minLength} label="Mínimo 6 caracteres" />
                    <CheckItem ok={passwordChecks.uppercase} label="1 letra maiúscula" />
                    <CheckItem ok={passwordChecks.lowercase} label="1 letra minúscula" />
                    <CheckItem ok={passwordChecks.number} label="1 número" />
                    <CheckItem ok={passwordChecks.special} label="1 caractere especial" />
                  </div>
                )}
              </div>

              <div>
                <FieldLabel required>Confirmar Senha</FieldLabel>
                <input
                  type="password"
                  value={form.confirmarSenha}
                  onChange={e => set('confirmarSenha', e.target.value)}
                  placeholder="••••••••"
                  className={inputClass(errors.confirmarSenha)}
                />
                <ErrorMsg msg={errors.confirmarSenha} />
                {form.confirmarSenha && form.senha && (
                  <div className={`flex items-center gap-2 mt-2 text-xs ${
                    form.senha === form.confirmarSenha ? 'text-accent' : 'text-destructive'
                  }`}>
                    {form.senha === form.confirmarSenha
                      ? <><Check className="w-3.5 h-3.5" /> Senhas coincidem</>
                      : <><X className="w-3.5 h-3.5" /> Senhas não coincidem</>}
                  </div>
                )}
              </div>

            </div>
          </div>

          {/* SEÇÃO FINAL */}
          <div className={sectionClass}>
            <div className="flex flex-col gap-5">

              <label className="flex items-start gap-3 cursor-pointer">
                <input
                  type="checkbox"
                  checked={form.termos}
                  onChange={e => set('termos', e.target.checked)}
                  className="mt-0.5 w-4 h-4 accent-accent flex-shrink-0"
                />
                <span className="text-sm text-foreground/80">
                  Li e aceito os{' '}
                  <span className="text-accent underline cursor-pointer">Termos de Uso</span>
                </span>
              </label>
              <ErrorMsg msg={errors.termos} />

              {status === 'success' && (
                <div
                  className="flex items-center gap-3 px-5 py-4 rounded-xl border text-sm font-medium"
                  style={{
                    background: 'hsl(var(--accent) / 0.1)',
                    borderColor: 'hsl(var(--accent) / 0.4)',
                    color: 'hsl(var(--accent))',
                  }}
                >
                  <Check className="w-5 h-5 flex-shrink-0" />
                  Cadastro enviado com sucesso.
                </div>
              )}

              {status === 'error' && (
                <div
                  className="flex items-center gap-3 px-5 py-4 rounded-xl border text-sm font-medium"
                  style={{
                    background: 'hsl(var(--destructive) / 0.1)',
                    borderColor: 'hsl(var(--destructive) / 0.4)',
                    color: 'hsl(var(--destructive))',
                  }}
                >
                  <X className="w-5 h-5 flex-shrink-0" />
                  Erro ao enviar cadastro. Tente novamente.
                </div>
              )}

              <button
                type="submit"
                disabled={status === 'sending'}
                className="btn-primary w-full text-center disabled:opacity-60 disabled:cursor-not-allowed disabled:scale-100"
              >
                {status === 'sending' ? 'Enviando...' : 'Cadastrar'}
              </button>

            </div>
          </div>

        </form>

        <p className="text-center text-xs text-muted-foreground mt-8">
          © {new Date().getFullYear()} ai.webprojeto — Todos os direitos reservados.
        </p>
      </div>
    </div>
  );
}
