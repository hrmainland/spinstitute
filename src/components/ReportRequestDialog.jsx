import React, { useState, useEffect } from 'react';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  TextField,
  Button,
  Box,
  IconButton,
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

export default function ReportRequestDialog({ open, onClose, reportTitle }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    'additional-information': '',
    report: '',
  });

  useEffect(() => {
    if (reportTitle) {
      setFormData((prev) => ({ ...prev, report: reportTitle }));
    }
  }, [reportTitle]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // The form will submit naturally to Netlify
  };

  return (
    <Dialog
      open={open}
      onClose={onClose}
      maxWidth="sm"
      fullWidth
      PaperProps={{
        sx: {
          borderRadius: 2,
          p: 1,
        }
      }}
    >
      <DialogTitle sx={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        color: 'primary.main',
        fontWeight: 600,
        fontSize: '1.5rem',
      }}>
        Request Report
        <IconButton
          onClick={onClose}
          sx={{ color: 'text.secondary' }}
        >
          <CloseIcon />
        </IconButton>
      </DialogTitle>

      <DialogContent>
        <form
          name="report-request"
          method="POST"
          data-netlify="true"
          netlify-honeypot="bot-field"
          action="/success"
          className="report-request-form"
        >
          <input type="hidden" name="form-name" value="report-request" />

          {/* Honeypot field */}
          <Box sx={{ display: 'none' }}>
            <label>
              Don't fill this out if you're human: <input name="bot-field" />
            </label>
          </Box>

          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3, mt: 2 }}>
            <TextField
              fullWidth
              label="Name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              variant="outlined"
            />

            <TextField
              fullWidth
              label="Email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              required
              variant="outlined"
            />

            <TextField
              fullWidth
              label="Additional Information"
              name="additional-information"
              value={formData['additional-information']}
              onChange={handleChange}
              multiline
              rows={4}
              variant="outlined"
            />

            <TextField
              fullWidth
              label="Report"
              name="report"
              value={formData.report}
              onChange={handleChange}
              required
              variant="outlined"
              InputProps={{
                readOnly: true,
              }}
            />

            <Button
              type="submit"
              variant="contained"
              fullWidth
              sx={{
                py: 1.5,
                fontSize: '1rem',
                fontWeight: 600,
                textTransform: 'none',
                backgroundColor: 'accent.main',
                '&:hover': {
                  backgroundColor: 'primary.main',
                },
              }}
            >
              Submit Request
            </Button>
          </Box>
        </form>
      </DialogContent>
    </Dialog>
  );
}
