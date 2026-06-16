#!/bin/bash
cat > projects/exemplo-08--poster/js/config.js << EOF
const OMDB_API_KEY = '${OMDB_API_KEY}'
const CLOUDINARY_CLOUD_NAME = '${CLOUDINARY_CLOUD_NAME}'
const CLOUDINARY_UPLOAD_PRESET = '${CLOUDINARY_UPLOAD_PRESET}'
EOF