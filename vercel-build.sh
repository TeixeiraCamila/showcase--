#!/bin/bash
# Gera projects/exemplo-08--poster/js/config.js (gitignored) a partir do .env raiz.
# Na Vercel, as variáveis são injetadas no ambiente de build (dashboard) e têm
# prioridade; localmente, a fonte é o arquivo .env na raiz do repositório.

ROOT_DIR="$(cd "$(dirname "$0")" && pwd)"
ENV_FILE="$ROOT_DIR/.env"
CONFIG_OUT="$ROOT_DIR/projects/exemplo-08--poster/js/config.js"

get_env() {
  local key="$1"
  local value=""

  # 1) Variável de ambiente injetada pela plataforma (ex.: Vercel)
  if [ -n "${!key:-}" ]; then
    value="${!key}"
  # 2) Valor do arquivo .env na raiz
  elif [ -f "$ENV_FILE" ]; then
    value="$(
      grep -E "^[[:space:]]*${key}[[:space:]]*=" "$ENV_FILE" |
        head -n 1 |
        sed -E "s/^[[:space:]]*${key}[[:space:]]*=[[:space:]]*//" |
        sed -E "s/^['\"]+//; s/['\"]+$//"
    )"
  fi

  printf '%s' "$value"
}

OMDB_API_KEY="$(get_env OMDB_API_KEY)"
CLOUDINARY_CLOUD_NAME="$(get_env CLOUDINARY_CLOUD_NAME)"
CLOUDINARY_UPLOAD_PRESET="$(get_env CLOUDINARY_UPLOAD_PRESET)"

cat > "$CONFIG_OUT" << EOF
const OMDB_API_KEY = '${OMDB_API_KEY}'
const CLOUDINARY_CLOUD_NAME = '${CLOUDINARY_CLOUD_NAME}'
const CLOUDINARY_UPLOAD_PRESET = '${CLOUDINARY_UPLOAD_PRESET}'
EOF

echo "config.js gerado a partir do $ENV_FILE"