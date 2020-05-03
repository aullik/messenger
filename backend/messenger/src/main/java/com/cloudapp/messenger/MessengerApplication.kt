package com.cloudapp.messenger

import org.apache.commons.logging.LogFactory
import org.springframework.boot.SpringApplication
import org.springframework.boot.autoconfigure.SpringBootApplication
import org.springframework.context.annotation.Bean
import javax.servlet.ServletContextEvent
import javax.servlet.ServletContextListener

@SpringBootApplication
class MessengerApplication {
    @Bean
    protected fun listener(): ServletContextListener {
        return object : ServletContextListener {
            override fun contextInitialized(sce: ServletContextEvent) {
                logger.info("ServletContext initialized")
            }

            override fun contextDestroyed(sce: ServletContextEvent) {
                logger.info("ServletContext destroyed")
            }
        }
    }

    companion object {
        private val logger = LogFactory.getLog(
            MessengerApplication::class.java
        )

        @JvmStatic
        fun main(args: Array<String>) {
            SpringApplication.run(MessengerApplication::class.java, *args)
        }
    }
}