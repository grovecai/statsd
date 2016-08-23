{
  influxdb: {
    version: 0.13,
    host: 'localhost', // InfluxDB host. (default 127.0.0.1)
    port: 8086, // InfluxDB port. (default 8086)
    database: 'statsd', // InfluxDB database instance. (required)
    username: 'statsd', // InfluxDB database username. (required)
    password: 'statsd', // InfluxDB database password. (required)
    flush: {
      enable: true // Enable regular flush strategy. (default true)
    },
    proxy: {
      enable: false, // Enable the proxy strategy. (default false)
      suffix: 'raw', // Metric name suffix. (default 'raw')
      flushInterval: 1000 // Flush interval for the internal buffer. (default 1000)
    }
  },
  port: 8125, // StatsD port.
  backends: ['./backends/console', 'statsd-influxdb-backend'],
  debug: false,
  legacyNamespace: false
}
