import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Mail, Phone, MapPin, Send, Github, Linkedin, Clock, CheckCircle } from 'lucide-react';
import { Button, Card, Input, Textarea } from '../ui';
import { personalInfo } from '../../data';

// Form validation schema
const contactSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email address'),
  subject: z.string().min(5, 'Subject must be at least 5 characters'),
  message: z.string().min(10, 'Message must be at least 10 characters')
});

type ContactFormData = z.infer<typeof contactSchema>;

export const Contact: React.FC = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema)
  });

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    
    // Simulate form submission (replace with actual email service)
    try {
      await new Promise(resolve => setTimeout(resolve, 2000));
      console.log('Form submitted:', data);
      setIsSubmitted(true);
      reset();
    } catch (error) {
      console.error('Error submitting form:', error);
    } finally {
      setIsSubmitting(false);
      // Reset submitted state after 5 seconds
      setTimeout(() => setIsSubmitted(false), 5000);
    }
  };

  const contactMethods = [
    {
      icon: Mail,
      title: 'Email',
      value: personalInfo.email,
      href: `mailto:${personalInfo.email}`,
      description: 'Send me an email anytime',
      color: 'text-blue-600',
      bgColor: 'bg-blue-50'
    },
    {
      icon: Phone,
      title: 'Phone',
      value: personalInfo.phone,
      href: `tel:${personalInfo.phone.replace(/\s/g, '')}`,
      description: 'Call or text me',
      color: 'text-green-600',
      bgColor: 'bg-green-50'
    },
    {
      icon: MapPin,
      title: 'Location',
      value: personalInfo.location,
      href: `https://maps.google.com?q=${encodeURIComponent(personalInfo.location)}`,
      description: 'My current location',
      color: 'text-purple-600',
      bgColor: 'bg-purple-50'
    }
  ];

  const socialMedia = [
    {
      name: 'GitHub',
      icon: Github,
      url: personalInfo.github,
      color: 'text-gray-800',
      bgColor: 'bg-gray-100'
    },
    {
      name: 'LinkedIn',
      icon: Linkedin,
      url: personalInfo.linkedin,
      color: 'text-blue-600',
      bgColor: 'bg-blue-100'
    }
  ];

  return (
    <section id="contact" className="section-padding bg-white mobile-safe">
      <div className="container-custom">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-text">
            Get In Touch
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            I'm always open to discussing new opportunities, innovative projects, or just having a great conversation about technology.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Let's Connect
              </h3>
              <p className="text-gray-600 mb-8 leading-relaxed">
                Whether you have a project in mind, want to discuss collaboration opportunities, 
                or simply want to say hello, I'd love to hear from you. Feel free to reach out 
                through any of the channels below.
              </p>
            </div>

            {/* Contact Methods */}
            <div className="space-y-4 mb-8">
              {contactMethods.map((method, index) => (
                <motion.div
                  key={method.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card variant="hover" className="p-6">
                    <div className="flex items-center space-x-4">
                      <div className={`w-12 h-12 rounded-lg ${method.bgColor} flex items-center justify-center`}>
                        <method.icon className={`w-6 h-6 ${method.color}`} />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-gray-900 mb-1">
                          {method.title}
                        </h4>
                        <a
                          href={method.href}
                          target={method.title === 'Location' ? '_blank' : '_self'}
                          rel={method.title === 'Location' ? 'noopener noreferrer' : undefined}
                          className={`${method.color} hover:underline font-medium`}
                        >
                          {method.value}
                        </a>
                        <p className="text-sm text-gray-600 mt-1">
                          {method.description}
                        </p>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>

            {/* Social Media */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <h4 className="font-semibold text-gray-900 mb-4">
                Follow me on social media
              </h4>
              <div className="flex space-x-4">
                {socialMedia.map((social) => (
                  <motion.a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center justify-center w-12 h-12 rounded-lg ${social.bgColor} ${social.color} hover:shadow-lg transition-all duration-300`}
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <social.icon className="w-6 h-6" />
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Availability */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              viewport={{ once: true }}
              className="mt-8"
            >
              <Card className="p-6 bg-gradient-to-r from-green-50 to-blue-50">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                    <Clock className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">
                      Available for opportunities
                    </h4>
                    <p className="text-sm text-gray-600">
                      I'm currently open to new freelance projects and full-time opportunities.
                    </p>
                  </div>
                </div>
              </Card>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Card className="p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Send me a message
              </h3>

              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-8"
                >
                  <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
                  <h4 className="text-xl font-semibold text-gray-900 mb-2">
                    Message Sent Successfully!
                  </h4>
                  <p className="text-gray-600">
                    Thank you for reaching out. I'll get back to you as soon as possible.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <Input
                      label="Name"
                      placeholder="Your full name"
                      error={errors.name?.message}
                      {...register('name')}
                    />
                    <Input
                      label="Email"
                      type="email"
                      placeholder="your.email@example.com"
                      error={errors.email?.message}
                      {...register('email')}
                    />
                  </div>

                  <Input
                    label="Subject"
                    placeholder="What's this about?"
                    error={errors.subject?.message}
                    {...register('subject')}
                  />

                  <Textarea
                    label="Message"
                    placeholder="Tell me more about your project or inquiry..."
                    rows={6}
                    maxLength={1000}
                    showCount
                    error={errors.message?.message}
                    {...register('message')}
                  />

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full inline-flex items-center justify-center font-medium rounded-lg transition-all duration-300 focus:outline-none focus:ring-4 disabled:opacity-50 disabled:cursor-not-allowed bg-primary-600 hover:bg-primary-700 text-white focus:ring-primary-300 transform hover:scale-105 px-8 py-4 text-lg"
                  >
                    {isSubmitting && (
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-current" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                    )}
                    {!isSubmitting && <Send className="w-5 h-5 mr-2" />}
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                  </button>
                </form>
              )}
            </Card>
          </motion.div>
        </div>

        {/* Additional Information */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <Card className="p-8 bg-gradient-to-r from-blue-50 to-purple-50">
            <h3 className="text-xl font-bold text-gray-900 mb-4">
              Let's Build Something Amazing Together
            </h3>
            <p className="text-gray-600 max-w-3xl mx-auto mb-6">
              I believe in the power of collaboration and innovation. Whether you're a startup looking to build your MVP, 
              an established company seeking to modernize your tech stack, or a fellow developer wanting to collaborate 
              on an interesting project, I'm excited to hear from you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                variant="primary"
                href={`mailto:${personalInfo.email}`}
                icon={Mail}
              >
                Send Email
              </Button>
              <Button
                variant="secondary"
                href="/resume.pdf"
                download
                external
              >
                Download Resume
              </Button>
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}; 