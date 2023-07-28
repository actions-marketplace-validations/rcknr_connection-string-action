# Parse postgres connection string

Github Action to parse PostgreSQL connection string to individual components

## Inputs

### `connection-string`

**Required** Connection string to parse.

## Outputs

### `user`
Username
### `password`
Password
### `host`
Hostname
### `port`
Port number
### `database`
Database name

## Example usage

```yaml
uses: rcknr/postgres-connection-string-action
with:
  connection-string: postgres://postgres:postgres@db.postgresql.org/postgres
```
