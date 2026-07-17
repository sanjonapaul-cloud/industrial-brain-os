# Industrial Brain OS Database Schema

**Database:** PostgreSQL

**Version:** MVP v1

**Status:** Design Phase

---

# Users

| Column | Type |
|---------|------|
| id | UUID |
| name | VARCHAR |
| email | VARCHAR |
| role | VARCHAR |
| created_at | TIMESTAMP |

**Primary Key:** id

---

# Documents

| Column | Type |
|---------|------|
| id | UUID |
| filename | VARCHAR |
| document_type | VARCHAR |
| upload_date | TIMESTAMP |
| status | VARCHAR |
| owner_id | UUID |

**Primary Key:** id

**Foreign Key:**
- owner_id → Users.id

---

# Assets

| Column | Type |
|---------|------|
| id | UUID |
| asset_name | VARCHAR |
| asset_type | VARCHAR |
| location | VARCHAR |
| status | VARCHAR |

**Primary Key:** id

---

# Maintenance

| Column | Type |
|---------|------|
| id | UUID |
| asset_id | UUID |
| maintenance_type | VARCHAR |
| scheduled_date | TIMESTAMP |
| status | VARCHAR |

**Primary Key:** id

**Foreign Key:**
- asset_id → Assets.id

---

# Safety

| Column | Type |
|---------|------|
| id | UUID |
| incident_type | VARCHAR |
| risk_level | VARCHAR |
| status | VARCHAR |

**Primary Key:** id

---

# Compliance

| Column | Type |
|---------|------|
| id | UUID |
| standard | VARCHAR |
| compliance_score | INTEGER |
| status | VARCHAR |

**Primary Key:** id

---

# Chats

| Column | Type |
|---------|------|
| id | UUID |
| user_id | UUID |
| query | TEXT |
| response | TEXT |
| created_at | TIMESTAMP |

**Primary Key:** id

**Foreign Key:**
- user_id → Users.id

---

# Entity Relationships

Users (1) ────────< Documents (N)

Users (1) ────────< Chats (N)

Assets (1) ────────< Maintenance (N)

---

# Future Tables (Phase 2)

- Document Chunks
- Knowledge Graph Nodes
- Knowledge Graph Edges
- Audit Logs
- Notifications
- Embeddings (or Qdrant references)

---

# Notes

- PostgreSQL will be used as the primary relational database.
- Qdrant will store vector embeddings for semantic search and Retrieval-Augmented Generation (RAG).
- Neo4j will manage knowledge graph relationships between documents, assets, maintenance records, and operational data.
- This schema represents the MVP (Version 1) and will be extended in future development phases.